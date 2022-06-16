<template>
    <div>
        <form @submit.prevent="saveDropElement()">
            <div class="modal-body">
                <div class="row mb-3">
                    <div class="block col-6">
                        <label for="title"><b>Наименование:</b></label>
                        <input autofocus autocomplete="off" id="title" class="form-control" type="text" v-model="vv.title">
                    </div>
                    <div class="block col-6">
                        <label for="required"><b>Обязательно к заполнению:</b></label>
                        <select id="required" class="form-control" v-model="vv.required">
                            <option value="1">Да</option>
                            <option value="0">Нет</option>
                        </select>
                    </div>
                </div>

                <div class="row mb-3">
                    <div class="block col-6">
                        <label for="name"><b>Тип поля:</b></label>
                        <input autocomplete="off" id="name" class="form-control" type="text" v-model="vv.name" disabled="true">
                    </div>
                    <div class="block col-6" v-if="vv.type == 'text'">
                        <label for="dictionary_id"><b>Тип данных:</b></label>
                        <select id="dictionary_id" class="form-control"
                                v-model="vv.dictionary_id">
                            <option v-for="dic in Dictionary"
                                    :key="dic.name"
                                    :value="dic.type"
                            >
                                {{dic.name}}
                            </option>
                        </select>
                    </div>
                    <div class="block col-6">

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
    import mixin from "../../mixins/myMixin";
    export default {
        name: "Viewmodal",
        mixins: [mixin],
        props: ['copy', 'clonedItems'],
        computed:{
            vv(){
                let find;
                let copy = this.copy;
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