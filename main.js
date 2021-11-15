const app = Vue.createApp({
    data() {
        return {
            total: '',
            description: '',
            editedData: null,
            amounts: [
                
            ]
        }
    },

    methods: {
        submitData(){
            if(this.total.length === 0) return;

            if(this.editedData === null){
                this.amounts.push({
                    total: this.total,
                    description: this.description
                });
            }
            else{
                this.amounts[this.editedData].total = this.total;
                this.amounts[this.editedData].description = this.description;
                this.editedData = null;
            }

            this.total = '';
            this.description = '';
        },

        deleteData(index){
            this.amounts.splice(index, 1);
        },

        editData(index){
            this.total = this.amounts[index].total;
            this.description = this.amounts[index].description;
            this.editedData = index;
        },
    }
})