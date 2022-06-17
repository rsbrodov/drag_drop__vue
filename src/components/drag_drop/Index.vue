<template>
    <div id="app">
        <FlashMessage :position="'right bottom'" style='z-index:20001;'/>
        <!-- Modal -->
        <b-modal id="createElement" title="Добавление элемента" hide-footer size="lg">
            <Viewmodal
                @close-modal="closeModal('createElement')"
                :copy="copy"
                :clonedItems="clonedItems"
            />
        </b-modal>
        <!--End Modal -->

        <!-- Modal -->
        <b-modal id="editElement" title="Редактирование элемента" hide-footer size="lg">
            <Viewmodal
                @close-modal="closeModal('createElement')"
                :copy="copy"
                :clonedItems="clonedItems"
            />
        </b-modal>
        <!--End Modal -->

        <div class="my-container mt-5">
            <div class="blocks">
                <div class="col-8 left-block">
                    <div class="left-block__draggable-layout" v-for="(mas, index) in clonedItems" :key="index"><!--Перебор строк-->
                        <b-icon class="btn-delete" @click="deleteRow(index)" icon="trash" />
                        <draggable class="left-block__draggable-layout__draggable-parent" v-model="clonedItems[index]" :options="clonedItemOptions">
                            <div class="clickable left-block__draggable-layout__draggable-parent__item" v-for="(item, indexing) in mas" :key="uuid(item)"  >
                                <p class="pl-2 pt-3 text-secondary"><b-icon :icon="item.class"/> {{item.title}}</p>
                                <div class="button-group">
                                    <button class="btn btn-outline-secondary mr-2" @click="EditItem(item.uid)"><b-icon icon="pencil" /></button>
                                    <button class="btn btn-outline-secondary mr-2" @click="deleteItem(index, indexing)"><b-icon icon="trash" /></button>
                                </div>
                            </div>
                        </draggable>
                    </div>
                </div>
                <div class="col-3 right-block">
                    <div class="d-flex flex-column">
                        <div class="p-2 add-row-button"><button @click="pushRow()" class="btn btn-outline-primary form-control text-left">
                            <b-icon icon="layout-text-sidebar" />Добавить строку</button>
                        </div>
                        <div class="p-2 add-row-button"><button class="btn btn-outline-primary form-control text-left" @click="goNext()">
                            <b-icon icon="save"/>Сохранить и перейти к макету</button>
                        </div>
                        <draggable
                            v-model="availableItems"
                            :options="availableItemOptions"
                            :clone="handleClone"
                            @end="moveAction"
                        >
                            <div class="drab-button-el p-2" v-for="(item,index) in availableItems" :key="index">
                                <a class="btn btn-outline-secondary form-control text-left">
                                    <b-icon :icon="item.class" />{{item.name}}
                                </a>
                            </div>
                        </draggable>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import $ from 'jquery'
    import draggable from 'vuedraggable'
    import Viewmodal from "./Viewmodal";
    export default {
        name: "Index.vue",
        components: {draggable, Viewmodal},
        data() {
            return {
                copy: null,
                clonedItems: [
                    [
                    ]
                ],
                availableItems: [
                    {
                        class: "chat-text",
                        name: "Текстовое поле",
                        type: "text",
                    },
                    {
                        class: "code",
                        name: "HTML редактор",
                        type: "textarea",
                        dictionary_id: 'text'
                    },
                    {
                        class: "caret-down",
                        name: "Выпадающий список",
                        type: "select",
                        dictionary_id: 'varchar'
                    },
                    {
                        class: "calendar",
                        name: "Дата/Время",
                        type: "datetime",
                        dictionary_id: 'datetime'
                    },
                    {
                        class: "image",
                        name: "Изображение",
                        type: "file",
                        dictionary_id: 'varchar'
                    },
                    {
                        class: "list",
                        name: "Радио-группа",
                        type: "radio",
                        dictionary_id: 'boolean'
                    },
                    {
                        class: "card-checklist",
                        name: "Флажок",
                        type: "checkbox",
                        dictionary_id: 'boolean'
                    },
                ],
                clonedItemOptions: {
                    group: "items"
                },
                availableItemOptions: {
                    group: {
                        name: "items",
                        pull: "clone",
                        put: false
                    },
                    sort: false
                }
            };
        },
        methods: {
            handleClone(item) {
                let cloneMe = JSON.parse(JSON.stringify(item));
                this.$set(cloneMe, 'title', '');
                this.$set(cloneMe, 'required', '');
                if(cloneMe.type == 'text'){
                    this.$set(cloneMe, 'dictionary_id', null);
                }
                //делаем ключик в момент клонирования
                const key = Math.random().toString(16).slice(2);
                this.$set(cloneMe, "uid", key);
                this.copy = key;
                return cloneMe;
            },
            moveAction() {
                this.$bvModal.show('createElement')
            },
            deleteItem(index, indexing) {
                this.clonedItems[index].splice(indexing, 1);
            },
            deleteRow(index) {
                if (this.clonedItems.length > 1){
                    this.clonedItems.splice(index, 1);
                }else{
                    this.flashMessage.error({
                        message: 'Нельзя удалить все блоки',
                        time: 3000,
                    });
                }
            },
            uuid(e) {
                if (e.uid) return e.uid;
                const key = Math.random().toString(16).slice(2);
                this.$set(e, "uid", key);
                return e.uid;
            },
            closeModal(id) {
                this.$bvModal.hide(id)
            },
            EditItem(uid) {
                this.copy = uid;
                this.$bvModal.show('createElement')
            },
            addMyClass(){
                $('.btn2').addClass('btn btn-danger')
            },
            pushRow() {
                let dop_array = [];
                this.clonedItems.push(dop_array);
            },
            goNext(){
                if(this.clonedItems[0].length === 0){
                    this.flashMessage.error({
                        message: 'Необходимо добавить хотя бы одно поле в объект для перехода в макет',
                        time: 3000,
                    });
                }else{
                    this.$router.push({name: 'Maket', params: { clonedItems: this.clonedItems}});
                }
            }
        },
    }
</script>

<style lang="scss">
    .blocks{
        display: flex;
        justify-content: space-around;
    }
    .btn2{
        color:$color!important;
    }
    .left-block {
        background-color: #ff7595;
        border-radius: 5px;
    }
    .right-block {
        background-color: #ebf2fc;
        border-radius: 5px;
    }
    .left-block__draggable-layout {
        background-color: white;
        min-height: 110px;
        max-height: 11000px;
        text-align: right;
        padding-bottom: 10px;
        margin-top:20px;
        border-radius: 5px;
    }

    .left-block__draggable-layout__draggable-parent {
        background-color: #c4c4c4;
        border-radius: 5px;
        min-height: 60px;
        width: 96%;
        margin:0 auto;
        padding-bottom: 10px;
        padding-top: 10px;
    }
    .left-block__draggable-layout__draggable-parent__item {
        background-color: white;
        width: 98%;
        border-radius: 5px;
        height: 45px;
        margin: 5px auto;
        cursor: grab;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .left-block__draggable-layout__draggable-parent__item:active {
        cursor: grabbing;
    }
    .left-block__draggable-layout__draggable-parent__item > .button-group {
        display: flex;
        justify-content: space-between;
    }
    .left-block__draggable-layout__draggable-parent__item > p {
        color: black;
        font-size: 18px;
    }
    i:hover {
        cursor: pointer;
    }
    .drab-button-el > a{
        cursor: grabbing;
    }
</style>