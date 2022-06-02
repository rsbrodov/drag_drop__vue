<template>
    <div id="app">
        <div class="container-fluid">
            <div class="row ">
                <div class="col-9 left-block">
                    <div class="left-block__draggable-layout mt-2">
                        <draggable class="left-block__draggable-layout__draggable-parent mt-3 mb-3" v-model="clonedItems" :options="clonedItemOptions">
                            <div class="clickable left-block__draggable-layout__draggable-parent__item mt-2 mb-2" v-for="(item) in clonedItems" :key="uuid(item)" >
                                <p class="pl-2 pt-3 text-secondary"><i :class="item.class"></i> {{item.title}}</p>
                                <div class="button-group">
<!--                                    <button class="btn btn-outline-secondary mr-2" @click="EditItem(item.uid)"><i class="fa fa-pencil fa-sm"></i></button>-->
<!--                                    <button class="btn btn-outline-secondary mr-2" @click="deleteItem(index)"><i class="fa fa-trash fa-sm"></i></button>-->
                                </div>
                            </div>
                        </draggable>
                    </div>
                </div>
                <div class="col-3">
                    <div class="d-flex flex-column">
                        <div class="p-2"><a href="" class="btn btn-primary form-control text-left"><i
                                class="fa fa-save fa-lg" aria-hidden="true"></i> Сохранить черновик</a></div>
                        <div class="p-2"><a href="" class="btn btn-primary form-control text-left"><i
                                class="fa fa-check-circle fa-lg" aria-hidden="true"></i> Публикация типа</a></div>
                        <div class="p-2"><a href="" class="btn btn-primary form-control text-left"><i
                                class="fa fa-trash fa-lg" aria-hidden="true"></i> Удалить тип</a></div>
                        <div class="p-2"><a href="" class="btn btn-outline-secondary form-control text-left"><i
                                class="fa fa-bars fa-lg" aria-hidden="true"></i> Добавить строку</a></div>
                        <div class="p-2"><a href="" class="btn btn-outline-secondary form-control text-left"><i
                                class="fa fa-columns fa-lg" aria-hidden="true"></i> Добавить колонку</a></div>


                        <draggable
                                v-model="availableItems"
                                :options="availableItemOptions"
                                :clone="handleClone"
                                @end="moveAction"
                        >
                            <div class="p-2" v-for="(item,index) in availableItems" :key="index">
                                <a class="btn btn-outline-secondary form-control text-left">
                                    <i :class="item.class" aria-hidden="true"></i> {{item.name}}
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
    import draggable from 'vuedraggable'
    export default {
        name: "Index.vue",
        components: {draggable},
        data() {
            return {
                copy: null,
                clonedItems: [
                ],
                availableItems: [
                    {
                        class: "fa fa-code fa-lg",
                        name: "HTML редактор",
                        type: "textarea",
                    },
                    {
                        class: "fa fa-caret-down fa-lg",
                        name: "Выпадающий список",
                        type: "select",
                    },
                    {
                        class: "fa fa-calendar fa-lg",
                        name: "Дата/Время",
                        type: "datetime",
                    },
                    {
                        class: "fa fa-image fa-lg",
                        name: "Изображение",
                        type: "file",
                    },
                    {
                        class: "fa fa-list fa-lg",
                        name: "Радио-группа",
                        type: "radio",
                    },
                    {
                        class: "fa fa-text-height fa-lg",
                        name: "Текстовое поле",
                        type: "text",
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
                if(cloneMe.type == 'select' || cloneMe.type == 'radio'){
                    this.$set(cloneMe, 'dictionary_id', null);
                }
                //делаем ключик в момент клонирования
                const key = Math.random().toString(16).slice(2);
                this.$set(cloneMe, "uid", key);
                this.copy = key;
                return cloneMe;
            },
            moveAction() {
                this.openModal('createElement');
            },
            deleteItem(index, indexing) {
                this.clonedItems[index].splice(indexing, 1);
            },
            uuid(e) {
                if (e.uid) return e.uid;
                const key = Math.random()
                    .toString(16)
                    .slice(2);
                this.$set(e, "uid", key);
                return e.uid;
            },
            /*closeModal(id) {
                $("#"+id).modal("hide");
            },
            openModal(id) {
                $('#'+id).modal('show');
            },
            EditItem(uid) {
                this.copy = uid;
                this.openModal('editElement');
            },*/
        },
    }
</script>

<style scoped>
    .left-block {
        background-color: #d6d6d6;
    }
    .left-block__draggable-layout {
        background-color: white;
        display: flex;
        justify-content: center;
        align-items: center;
        min-height: 80px;
    }
    .left-block__draggable-layout__draggable-parent {
        background-color: #c4c4c4;
        border-radius: 5px;
        min-height: 60px;
        width: 98%;
    }
    .left-block__draggable-layout__draggable-parent__item {
        background-color: white;
        width: 98%;
        border-radius: 5px;
        min-height: 40px;
        margin: 0 auto;
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
</style>