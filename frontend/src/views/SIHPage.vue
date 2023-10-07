<template>
  <div class="main">
    <div class="text">
      <label>Chacha</label>
      <label>Choudhary</label>
      <label>Bot.</label>
    </div>
    <div class="bot">
      <iframe
        style="border: none;"
        height="600px"
        width="400px"
        src="https://widget.kommunicate.io/chat?appId=chacha-choudhary-pz0wb"
        allow="microphone; geolocation;"
      >
      </iframe>
    </div>
  </div>
</template>

<script>
export default {
    methods: {
    },
    mounted (){
      (function(d, m){
        var kommunicateSettings = {"appId":"chacha-choudhary-pz0wb","popupWidget":true,"automaticChatOpenOnNavigation":true};
        var s = document.createElement("script"); s.type = "text/javascript"; s.async = true;
        s.src = "https://widget.kommunicate.io/v2/kommunicate.app";
        var h = document.getElementsByTagName("head")[0]; h.appendChild(s);
        window.kommunicate = m; m._globals = kommunicateSettings;
      })(document, window.kommunicate || {});
    },
    data: function(){
    }
}
</script>