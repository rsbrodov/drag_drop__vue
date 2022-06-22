<template>
   <div>
      <div class="my-container mt-5">
         <div class="razdel">
            <p class="mt-3 mb-3 title">Пример формы</p>
            <div class="form">
               <div class="form-rows" v-for="(row, index) in $route.params.clonedItems" :key="index">
                  <div class="elements my-container" v-for="(element, index) in row" :key="index">
                     <div class="element_row" v-if="element.type == 'text' || element.type == 'file'">
                        <div class="label">
                           <label
                                   :for="element.uid"><b-icon
                                   :icon="element.class"/>
                              <b> {{element.title}}:</b>
                           </label>
                        </div>
                        <input autocomplete="off" :id="element.uid" class="form-control" :type="element.type">
                     </div>
                     <div class="element_row" v-if="element.type == 'textarea'">
                        <div class="label">
                           <label
                                   :for="element.uid"><b-icon
                                   :icon="element.class"/>
                              <b> {{element.title}}:</b>
                           </label>
                        </div>
                        <textarea autocomplete="off" :id="element.uid" class="form-control" cols="7"/>
                     </div>
                     <div class="element_row" v-if="element.type == 'select'">
                        <div class="label">
                           <label
                                   :for="element.uid"><b-icon
                                   :icon="element.class"/>
                              <b> {{element.title}}:</b>
                           </label>
                        </div>
                        <select :id="element.uid" class="form-control">
                           <option>Пункт 1</option>
                           <option>Пункт 2</option>
                           <option>Пункт 3</option>
                        </select>
                     </div>
                     <div class="element_row" v-if="element.type == 'radio' || element.type == 'checkbox'">
                        <div class="label">
                           <label
                                   :for="element.uid"><b-icon
                                   :icon="element.class"/><b> {{element.title}}:</b>
                           </label><br>
                        </div>
                        <div class="checkbox-radio">
                           <div class="checkbox-radio-element">
                              <input :type="element.type" :id="element.uid" value=""> Пункт 1
                           </div>
                           <div class="checkbox-radio-element">
                              <input :type="element.type" :id="element.uid" value=""> Пункт 2
                           </div>
                           <div class="checkbox-radio-element">
                              <input :type="element.type" :id="element.uid" value=""> Пункт 3
                           </div>
                        </div>
                     </div>
                     <div class="element_row" v-if="element.type == 'datetime'">
                        <div class="label">
                           <label
                                   :for="element.uid"><b-icon
                                   :icon="element.class"/><b> {{element.title}}:</b>
                           </label>
                        </div>
                        <datepicker
                            :id="element.uid"
                            :language="ru"
                            class="form-control">
                        </datepicker>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <hr>
         <div class="razdel mt-5 container">
            <p class="mt-3 mb-3 title">Пример данных в бд</p>
            <table class="table">
               <thead>
               <tr>
                  <th scope="col">Поле</th>
                  <th scope="col">Тип данных</th>
                  <th scope="col">Размер</th>
                  <th scope="col">Null</th>
                  <th scope="col">Комментарий</th>
               </tr>
               </thead>
               <tbody>
                  <tr>
                     <td>id</td>
                     <td>int</td>
                     <td>11</td>
                     <td>Нет</td>
                     <td>-</td>
                  </tr>
                  <tr v-for="(element, index) in vv" :key="index">
                     <td>{{element.title | element_slug}}</td>
                     <td>{{element.dictionary_id}}</td>
                     <td>{{element.dictionary_id | get_size}}</td>
                     <td>{{element.required | status_null}}</td>
                     <td>{{element.title}}</td>
                  </tr>
               </tbody>
               </table>
         </div>
         <div class="razdel mt-5">
            <p class="mt-3 mb-3 title">Список URL API</p>
            <p class="list"><b class="font-italic">1. https://sync-convert/products/create</b> - создание записи в таблице, передать параметры методом (post)</p>
            <p class="list"><b class="font-italic">2. https://sync-convert/products/index</b> - получение всего списка записей (get)</p>
            <p class="list"><b class="font-italic">3. https://sync-convert/products/delete/{id}</b> - удаление записи, метод (delete)</p>
            <p class="list"><b class="font-italic">4. https://sync-convert/products/update/{id}</b> - удаление записи, метод (put), передать параметры обновленной строки</p>

         </div>
         <div class="razdel mt-5">
            <p class="mt-3 mb-3 title">*Внимание</p>
            <p class="list"><b class="font-italic text-danger">Это демо-версия системы, продемонстрирована для изучения работы в ней. В боевой версии есть личный кабинет с историей созданных таблиц, по каждой из которых доступен набор API. Также есть возможность формирования справочников для выпадающих списков и формировать связные таблицы</b></p>

         </div>
      </div>
   </div>
</template>

<script>
    import $ from "jquery";
    import mixin from "../../mixins/myMixin";
    import Datepicker from 'vuejs-datepicker';
    import {ru} from 'vuejs-datepicker/dist/locale'
    import { url_slug } from 'cyrillic-slug'
    export default {
       name: "Maket",
       mixins: [mixin],
       components: {
          Datepicker
       },
       data () {
          return {
             ru: ru,
          }
       },
       computed:{
          vv(){
             var find = [];
             $.each(this.$route.params.clonedItems,function(index,clonedItem) {
                $.each(clonedItem,function(index_item,item) {
                   find.push(item);
                });
             });
             return find;
          }
       },
       filters: {
          status_null: function (status) {
             if (status === 0) {
                return "Нет";
             }
             else {
                return "Да";
             }
          },
          element_slug: function (title) {
             return url_slug(title);
          },

       },
       created() {
          if(this.vv.length === 0){
             this.$router.push({ name: 'DragDrop' })
          }
       }
    }
</script>

<style scoped>
.form{
   display: flex;
   margin: 0 -25px;
}
.form-rows{
   flex: 1 1 auto;
   margin: 0 25px;
   background-color: #ff7595;
   border-radius: 25px;
   box-shadow: 0 0 10px 5px rgba(221, 221, 221, 1);
}
.elements{
   padding:15px 0
}
.label{
   text-align: left;
}
.razdel > .title{
   font-size: 35px;
}
   .checkbox-radio{
      background-color: white;
      display:flex;
      justify-content: center;
      align-items: center;
      border-radius: 5px;
      height: 35px;
   }
   .checkbox-radio-element{
      margin: 0 25px;
   }
   .list{
      color:black;
      text-align:left;
   }
.element_row{
}
</style>