<template>
    <div class="w3-display-container" style="height: 100%">
        <div class="w3-display-middle">
            <template v-if="!isSaved">
                <p>Gib bitte hier deinen JWConf-Key ein:</p>
                <input v-model="key" class="w3-input w3-border w3-round-xxlarge">
                <p class="tooltip">https://jwconf.org/?key=<span class="w3-text-amber">{{keyTemplate}}</span></p>
                <button @click="save()" class="w3-button w3-amber w3-block w3-round-xxlarge">
                    Speichern
                </button>
            </template>

            <template v-if="isSaved">
                <p>Du wirst in <b>{{ countdown }}</b> Sekunden weitergeleitet ...</p>
                <p class="tooltip">https://jwconf.org/?key=<span class="w3-text-amber">{{keyTemplate}}</span></p>
                <button @click="abort()" :id="abortId" class="abort w3-button w3-amber w3-block w3-round-xxlarge">
                    Abbrechen
                </button>
            </template>
        </div>
        <div class="w3-display-bottomright w3-right-align">
            <p class="copy"><span style="font-size: 8px">made by</span><br>Alexander Hentzsch</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'app',
        data() {
            return {
                key: '',
                lsName: 'jwconf',
                isSaved: false,
                countdown: 5,
                timeOutFunc: '',
                abortId: 'btnAbort'
            }
        },
        mounted() {
            let storage = localStorage.getItem(this.lsName);
            if (typeof storage === "string") {
                this.isSaved = true;
                this.key = localStorage.getItem(this.lsName);
                this.intervalFunc = setInterval(this.redirectByInterval, 1000);
                setTimeout(() => {
                    document.getElementById(this.abortId).focus();
                }, 500);
            }
        },
        computed: {
            keyTemplate() {
                return (this.key.length < 1) ? 'xxxxxxxxxxxx' : this.key
            }
        },
        methods: {
            save() {
                localStorage.setItem(this.lsName, this.key);
                this.redirect();
            },
            abort() {
                clearInterval(this.intervalFunc);
                this.isSaved = false;
            },
            redirectByInterval() {
                this.countdown--;
                if(this.countdown < 1) {
                    this.redirect();
                }
            },
            redirect(){
                window.location.href = `https://jwconf.org/?key=${this.key}`;
            }
        }
    }
</script>

<style scoped>
    @import url('https://fonts.googleapis.com/css?family=Oxygen+Mono|Raleway&display=swap');

    p {
        margin: 12px 26px;
        font-family: 'Raleway', sans-serif;
    }

    input {
        text-align: center;
        font-size: 24px;
        font-family: 'Oxygen Mono', monospace;
    }

    .tooltip {
        color: #9d9d9d !important;
        font-size: 12px;
        margin-top: 4px;
    }

    .copy {
        font-size: 10px;
        color: #333;
        line-height: 1.0;
    }

    .abort:focus {
        /*border: 1px solid #9d9d9d;*/
    }
</style>
