<template>
   <div>
      <div class="my-container mt-5">
         <div class="razdel">
            <p class="mt-3 mb-3">Пример формы</p>
            <div class="form">
               <div class="form-rows" v-for="(row, index) in $route.params.clonedItems" :key="index">
                  <div class="elements my-container" v-for="(element, index) in row" :key="index">
                     <div class="element_row" v-if="element.type == 'text' || element.type == 'file'">
                        <label :for="element.uid"><b-icon :icon="element.uid"/><b> {{element.title}}:</b></label>
                        <input autocomplete="off" :id="element.uid" class="form-control" :type="element.type">
                     </div>
                     <div v-if="element.type == 'textarea'">
                        <label :for="element.uid"><b-icon :icon="element.class"/><b> {{element.title}}:</b></label>
                        <textarea autocomplete="off" :id="element.uid" class="form-control" cols="7"/>
                     </div>
                     <div v-if="element.type == 'select'">
                        <label :for="element.uid"><b-icon :icon="element.class"/><b> {{element.title}}:</b></label>
                        <select :id="element.uid" class="form-control">
                           <option>Пункт 1</option>
                           <option>Пункт 2</option>
                           <option>Пункт 3</option>
                        </select>
                     </div>
                     <div v-if="element.type == 'radio' || element.type == 'checkbox'">
                        <label :for="element.uid"><b-icon :icon="element.class"/><b> {{element.title}}:</b></label><br>
                        <input :type="element.type" :id="element.uid" value=""> Пункт1 <br>
                        <input :type="element.type" :id="element.uid" value=""> Пункт2 <br>
                        <input :type="element.type" :id="element.uid" value=""> Пункт3 <br>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <hr>
         <div class="razdel mt-5">
            <p class="mt-3 mb-3">Пример данных в бд</p>
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

               </tbody>
               </table>
         </div>
      </div>

   </div>
</template>

<script>
    export default {
        name: "Maket"
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
label{
   text-align: left;
}
.razdel > p{
   font-size: 35px;
}
</style>