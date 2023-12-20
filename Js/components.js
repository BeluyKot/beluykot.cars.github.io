Vue.component('header-component', {
    template: `
<div class="header">
    <div class="logo_cont">
        <img class="logo"
             src="E:/car performance/img/logo.png " onclick="window.location.href='TTHCAR.html'">
    </div>
    <menu class="header_containers">
        <a class="style_of_text2 space" v-for="item in menu" href="#">{{item}}</a>
    </menu>
</div>
`,
    data: function () {
        return {
            counter: 10,
            testData: 'abc',
            menu: ["Марки", "Характеристики", "Отзывы", "Форум", "FAQ"],
            car: []
        }
    },
    methods: {
        echo() {
            console.log(this.testData)

        },

    }
})

Vue.component('custom-input-component', {
    template: `
<div class="custom_select">
    <div class="custom_select_cont" v-on:click="showDropDown()">
        <span class="custom_select_cont_span span">{{selectedItem}}</span>
        <i class="fas fa-chevron-down"></i>
    </div>
    <div class="drop-down" v-if="dropDown">
        <input class="custom_select_cont_input">
        <div class="drop-down-item-cont">
            <div class="drop-down-item"
                 v-on:click="setSelectedItem(item, type)"
                 v-for="item in optionList"
                 v-if="true">{{item}}</div>
        </div>
    </div>
</div>
`,
    data: function () {
        return {
            testInput: 0,
            dropDown: false,
            selectedItem: this.defaultValue
        }
    },
    mounted() {
        this.$root.$on('close-all', (e) => {
            this.dropDown = false
        })
    },
    methods: {
        showDropDown() {
            if (this.dropDown) {
                this.dropDown = false
            } else {
                this.$root.$emit('close-all')
                this.dropDown = true
            }
        },
        setSelectedItem(value, type) {
            this.selectedItem = value
            switch (type) {
                case 'brand':
                    this.setBrand(value)
                    break;
                case 'model':
                    this.setModel(value)
                    break;
                case 'perform':
                    this.setPerform(value)
                    break;
                default:
                    break;
            }
        },
        setBrand(brand) {
            this.$root.brand = brand
        },
        setModel(model) {
            this.$root.model = model
        },
        setPerform(perform){
            this.$root.perform = perform
        }
    },
    props: {
        props1: String,
        optionList: Array,
        defaultValue: String,
        type: String
    }
})