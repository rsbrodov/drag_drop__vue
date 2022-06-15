<template>
    <div>

        <!-- Header -->
        <header class="header">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="text-container">
                            <h1>Конструктор базы данных Вашего приложения</h1>
                            <p class="p-large p-heading">Начните формировать информационную архитектуру Вашего проекта. С помощью инструментов этого приложения Вы получите на выходе API ссылки, которые Вы сможете подключить в Ваш frontend. Это demo-версия проекта.</p>
                            <a class="btn-solid-lg" href="#your-link">ИНСТРУКЦИЯ</a>
                            <a class="btn-solid-lg"><router-link to="/drag-drop">НАЧАТЬ!</router-link></a>
                        </div> <!-- end of text-container -->
                    </div> <!-- end of col -->
                </div> <!-- end of row -->
                <div class="row">
                    <div class="col-lg-12">
                        <div class="image-container">
                            <img class="img-fluid" src="@/assets/images/header-iphone.png" alt="alternative">
                        </div> <!-- end of text-container -->
                    </div> <!-- end of col -->
                </div> <!-- end of row -->
            </div> <!-- end of container -->
            <div class="deco-white-circle-1">
                <img src="@/assets/images/decorative-white-circle.svg" alt="alternative">
            </div> <!-- end of deco-white-circle-1 -->
            <div class="deco-white-circle-2">
                <img src="@/assets/images/decorative-white-circle.svg" alt="alternative">
            </div> <!-- end of deco-white-circle-2 -->
            <div class="deco-blue-circle">
                <img src="@/assets/images/decorative-blue-circle.svg" alt="alternative">
            </div> <!-- end of deco-blue-circle -->
            <div class="deco-yellow-circle">
                <img src="@/assets/images/decorative-yellow-circle.svg" alt="alternative">
            </div> <!-- end of deco-yellow-circle -->
            <div class="deco-green-diamond">
                <img src="@/assets/images/decorative-green-diamond.svg" alt="alternative">
            </div> <!-- end of deco-yellow-circle -->
        </header> <!-- end of header -->
        <!-- end of header -->
    </div>
</template>

<script>
    export default {
        name: "Start"
    }
</script>

<style scoped>

</style>