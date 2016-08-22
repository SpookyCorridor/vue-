export default {
    created: ()=> {
        console.log('hello')
    },
    methods: {
            mixinFn: function() {
            console.log("I'm a mixin method!"); 
        }
    }
}; 