import testMixin from 'mixin'; 

let component = { 

    created: ()=> {
        console.log('created'); 
    },

    methods: {
        test: function() {
            console.log(`i'm a method on the component`)
        },
        getMessage: function() {
            return this.$root.message; 
        }
    },
    mixins: [testMixin],
    template: `
    <button v-on:click="test">{{getMessage()}}</button>
    <button v-on:click="mixinFn">mixin</button>
    `
    
}; 

export default component; 