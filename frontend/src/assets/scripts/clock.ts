// @ts-nocheck

class CountdownTracker {
    currentValue: number;
    spanElement: Element;
    label: string;
    value: number;

    constructor(label: string, value: number, refs: object) {

        const spanElement: Element = refs[`${label.toLowerCase()}Tracker`];
        this.spanElement = spanElement;
        this.label = label;
        this.value = value;
        this.currentValue = 0;

        this.update(value);
    }

    update (val: number) {
        val = val.toString().padStart(2, '0');
        
        const spanElement = this.spanElement;
        const top = spanElement.querySelector('.card__top'),
            bottom = spanElement.querySelector('.card__bottom'),
            back = spanElement.querySelector('.card__back'),
            backBottom = spanElement.querySelector('.card__back .card__bottom');
        
        if (val !== this.currentValue) {
            if (this.currentValue >= 0) {
                back.setAttribute('data-value', this.currentValue.toString());
                bottom.setAttribute('data-value', this.currentValue.toString());
            }
            this.currentValue = val;
            top.innerText = this.currentValue;
            backBottom.setAttribute('data-value', this.currentValue.toString());

            this.spanElement.classList.remove('flip');
            void this.spanElement.offsetWidth;
            this.spanElement.classList.add('flip');
        }
    }
}

class Clock {
    trackers: object;
    countdown: Date;
    callback: Function;
    throttle: number;

    constructor (countdown: Date, callback: Function, refs: object) {
        this.countdown = countdown;
        callback = callback || function () { };
        this.callback = callback;

        this.trackers = {};
        const timeRemKeys = getTimeRemaining(countdown);

        for (const key in timeRemKeys) {
            if (key === 'Total') {
                continue;
            }
            this.trackers[key] = new CountdownTracker(key, timeRemKeys[key], refs);
            // refs['clock'].appendChild(this.trackers[key].el);
        }

        this.throttle = 0;
        this.updateClock();
    }

    updateClock() {
        this.throttle++;
        const timeinterval = requestAnimationFrame(this.updateClock.bind(this));
    
        // // throttle so it's not constantly updating the time.
        if (this.throttle % 10) {
            return;
        }
    
        const t = getTimeRemaining(this.countdown);
        if (t.Total < 0) {
            cancelAnimationFrame(timeinterval);
            for (const key in this.trackers) {
                this.trackers[key].update(0);
            }
            this.callback();
            return;
        }
    
        for (const key in this.trackers) {
            this.trackers[key].update(t[key]);
        }
    }
}

function getTimeRemaining(endTime: Date) {
    const time = endTime.getTime() - new Date().getTime();
    return {
        'Total': time,
        'Days': Math.floor(time / (1000 * 60 * 60 * 24)),
        'Hours': Math.floor((time / (1000 * 60 * 60)) % 24),
        'Minutes': Math.floor((time / 1000 / 60) % 60),
        'Seconds': Math.floor((time / 1000) % 60)
    };
}

export default Clock