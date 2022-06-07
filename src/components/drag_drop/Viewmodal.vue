<template>
    <div>
        <form @submit.prevent="saveDropElement()">
            <div class="modal-body">
                <div class="row mb-3">
                    <div class="block col-6">
                        <label for="title"><b>Наименование:</b></label>
                        <input autofocus autocomplete="off" id="title" class="form-control" type="text">
                    </div>
                    <div class="block col-6">
                        <label for="required"><b>Обязательно к заполнению:</b></label>
                        <select id="required" class="form-control">
                            <option value="1">Да</option>
                            <option value="0">Нет</option>
                        </select>
                    </div>
                </div>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" @click="$emit('close-modal', 'createElement')">Отмена</button>
                <button id="add" type="submit" class="btn btn-primary">ОК</button>
            </div>
        </form>
    </div>
</template>

<script>
    import $ from 'jquery'
    export default {
        name: "Viewmodal",
        props: ['copy', 'clonedItems'],
        data() {
            return {
            }
        },
        computed:{
            vv(){
                let find;
                let copy = this.copy;//он не хочет читать переменную, нужно ее таким образом пробрасывать чтоб он видил ее в фориче ЖЕСТЬ
                //return find;
                $.each(this.clonedItems,function(index,clonedItem) {
                    $.each(clonedItem,function(index_item,item) {
                        if(item.uid === copy){
                            find = item;
                        }
                    });
                });
                return find;
            }
        },
        methods:{
            saveDropElement() {
                this.$emit('close-modal', 'createElement', this.vv)
            }
        },
    }
</script>

<style scoped>
</style>