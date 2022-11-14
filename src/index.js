import * as Vue from 'vue/dist/vue.esm-bundler.js'

const Hello = {
    props: ['message'],
    template: `
        <h1>
            {{ message }} 
        </h1>`
}

const Number = {
    props: ['number'],
    template: `
        <span v-bind:class="getNumberClass(number)">
            {{ number }}
        </span>
    `,
    methods: {
        isEven(number) {
            return number % 2 == 0;
        },
        getNumberClass(number) {
            return this.isEven(number) ? "red" : "blue"
        }
    }
}

const Incrementor = {
    components: {
        Number
    },
    data() {
        return { count: 0 }
    },
    template: `
        <div>
            <button v-on:click="increment">Increment</button>
            <p>
            <number v-bind:number="count" />
            </p>
        </div>
    `,
    methods: {
        increment() {
            this.count++;
        }
    }
}

const BoundedName = {
    template: `
    <div>
        <input 
            v-bind:value="name"
            v-on:input="input"
        >
        <p>
            {{ name }}
        </p>
        <p class="red" > 
        {{ nameError }}
    </p>
    </div>
    `,
    data() {
        return {
            name: "Ta"
        }
    },
    methods: {
        input(event) {
            this.name = event.target.value
        }
    },
    computed: {
        nameError() {
            if (this.name.length < 3) {
                return "Name must be greater than 2 letters";
            }
        }
    }
}

const BoundedText = {
    template: `
    <div>
    <input v-model="value">
        <p>{{ value }}</p>
    </div>
    `,
    data() {
        return {
            value: "Qwerty"
        }
    }

}

const BoundedCheckBox = {
    template: `
    <div>
        A
        <input type="checkbox"
            v-model="value" 
            value="A"
        />
        B
        <input type="checkbox"
            v-model="value"
            value = "B"
        />
        <p>
            {{ value }}
        </p>
    </div>
    `,
    data() {
        return {
            value: []
        }
    }

}

const BoundedRadio = {
    template: `
        <div>
            Either
            <input type="radio"
                v-model="value" 
                value="Either"
            />
            Or
            <input type="radio"
                v-model="value"
                value = "Or"
            />
            <p>
                {{ value }}
            </p>
        </div>
    `,
    data() {
        return {
            value: "Either"
        }
    }
}

const app = Vue.createApp({
    components: {
        Hello,
        Number,
        Incrementor,
        BoundedName,
        BoundedText,
        BoundedCheckBox,
        BoundedRadio
    },
    template: `
    <hello message="Hello VueJS3!" />
    <hello v-bind:message="greetings" />
    <hr/>
    <number v-for="number in numbers" v-bind:number="number" />
    <hr/>
    <incrementor />
    <hr/>
    <BoundedName />
    <hr>
    <BoundedText />
    <hr>
    <BoundedCheckBox />
    <hr>
    <BoundedRadio />
    <hr/>
     `,
    data() {
        return {
            greetings: "Hello World!",
            numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        }
    }
});
app.mount("#app");