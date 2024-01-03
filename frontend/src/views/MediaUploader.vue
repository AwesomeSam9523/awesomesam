<template>
  <div class="uploader">
    <div class="upload">
      <input type="file" @change="uploadFile" multiple/>
    </div>
    <div class="progress">
      <div
        v-for="(file, name) in files"
        :key="name"
        class="progress-bar-container"
      >
        <div
          class="progress-bar"
          :class="{
            'progress-bar-success': file.uploaded,
            'progress-bar-danger': file.error
          }"
          :style="{ width: file.progress + '%' }"
        >
          {{ name }} - {{ file.progress }}% @ {{ file.speed }}
        </div>
        <button v-if="file.uploaded" @click="copyLink(file)" class="btn">
          Copy Link
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      files: {}
    }
  },
  methods: {
    uploadFile(event) {
      const files = event.target.files;
      let token = sessionStorage.getItem('token');
      if (!token) {
        token = prompt('Please enter your token');
        if (!token)
          return;

        sessionStorage.setItem('token', token);
      }
      if (!files.length) {
        return;
      }
      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        const name = file.name;
        console.log(name);
        this.files[files[i].name] = {
          progress: 0,
          uploaded: false,
          error: false,
          speed: '0 MB/s',
          url: null,
        };
        this.upload(files[i], name);
      }
    },
    
    async upload(file, name) {
      const token = sessionStorage.getItem('token');
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      const config = {
        onUploadProgress: progressEvent => {
          const percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total);
          console.log(percentCompleted);
          this.files[file.name].progress = percentCompleted;
          // calculate speed
          const diffTime = new Date().getTime() - this.files[file.name].startTime;
          const diffSize = progressEvent.loaded - this.files[file.name].startSize;
          const speed = diffSize / diffTime * 1000;
          this.files[file.name].speed = `${(speed / (1024 * 1024)).toFixed(2)} MB/s`;
        },
      };
      // send file as body to POST /media
      const formData = new FormData();
      formData.append('file', file);
      const api = process.env.NODE_ENV === 'production' ? 'https://awesomesam.dev/api' : 'http://localhost:5000';
      this.files[file.name].startTime = new Date().getTime();
      this.files[file.name].startSize = 0;

      try {
        const { data } = await axios.post(`${api}/media?name=${encodeURIComponent(name)}`, formData, config);
        this.files[file.name].url = data.url;
        this.files[file.name].uploaded = true;
        console.log(data);
      } catch (error) {
        this.files[file.name].error = true;
      }
    },

    async copyLink(file) {
      try {
        await navigator.clipboard.writeText(file.url);
        alert('Copied to clipboard');
      } catch (error) {
        alert('Failed to copy to clipboard');
      }
    }
  }
}
</script>

<style scoped lang="scss">
.uploader {
  width: 100vw;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}

.upload {
  font-size: 1rem;
  margin-bottom: 1rem;
}

.progress {
  width: 80%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-top: 5rem;
}

.progress-bar-container {
  margin-bottom: 1rem;
  border: 3px solid #333;
  width: 100%;
  border-radius: 2rem;
  display: flex;
  flex-direction: row;
}

.progress-bar {
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  color: white;
  background-color: #333;
  transition: width 0.5s linear;
  border: 1px solid #333;
  border-radius: 2rem;
}

.progress-bar-success {
  background-color: #5cb85c;
}

.progress-bar-danger {
  background-color: #d9534f;
}

.btn {
  border-radius: 2rem;
}
</style>