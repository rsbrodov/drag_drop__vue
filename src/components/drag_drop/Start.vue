<template>
    <div>

        <nav class="navbar navbar-expand-lg navbar-dark navbar-custom fixed-top">
            <div class="container">
                <a class="navbar-brand logo-image" href="index.html"><img src="@/assets/images/logo.svg" alt="alternative"></a>

                <!-- Mobile Menu Toggle Button -->
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-awesome fas fa-bars"></span>
                    <span class="navbar-toggler-awesome fas fa-times"></span>
                </button>
                <!-- end of mobile menu toggle button -->

                <div class="collapse navbar-collapse" id="navbarsExampleDefault">
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item">
                            <a class="nav-link page-scroll" href="#description">DESCRIPTION <span class="sr-only">(current)</span></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link page-scroll" href="#features">FEATURES</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link page-scroll" href="#screens">SCREENS</a>
                        </li>

                        <!-- Dropdown Menu -->
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle page-scroll" id="navbarDropdown" role="button" aria-haspopup="true" aria-expanded="false">EXTRA</a>
                            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <a class="dropdown-item" href="article-details.html"><span class="item-text">ARTICLE DETAILS</span></a>
                                <div class="dropdown-divider"></div>
                                <a class="dropdown-item" href="terms-conditions.html"><span class="item-text">TERMS CONDITIONS</span></a>
                                <div class="dropdown-divider"></div>
                                <a class="dropdown-item" href="privacy-policy.html"><span class="item-text">PRIVACY POLICY</span></a>
                            </div>
                        </li>
                        <!-- end of dropdown menu -->
                    </ul>
                    <span class="nav-item">
                    <a class="btn-outline-sm page-scroll" href="#download">DOWNLOAD</a>
                </span>
                </div>
            </div> <!-- end of container -->
        </nav> <!-- end of navbar -->
        <!-- end of navigation -->


        <!-- Header -->
        <header class="header">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="text-container">
                            <h1>Mobile App Landing Page</h1>
                            <p class="p-large p-heading">Start focusing on your goals and get more things done with Sync mobile application. It's the first app to harness the power of social connections to help you stay focused and get organized</p>
                            <a class="btn-solid-lg" href="#your-link">ИНСТРУКЦИЯ</a>
                            <a class="btn-solid-lg"><router-link to="/drag-drop">СОЗДАТЬ</router-link></a>
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