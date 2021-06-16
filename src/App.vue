<template>
  <div id="app">
    <transition
        name="fade"
        mode="out-in"
      ><router-view/>
    </transition>
  </div>
</template>

<style>
#app {
  /* font-family: Avenir, Helvetica, Arial, sans-serif; */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center;
  color: #2c3e50; */
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.3s;
  transition-property: opacity;
  transition-timing-function: ease;
}

.fade-enter,
.fade-leave-active {
  opacity: 0
}

#position.laptop{
  position:relative;
  width: 80%;
  height: auto;
  /* Center horontaly */
  margin: 0 auto;
  padding: 10px;
  text-align: center;
  /* Center Vertically */
  top: 50%;
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
}

#position.tablet{
  /* Center Horizontaly */
  left: 10%;
  position:relative;
  width: 80%;
  text-align: center;

  /* Center Vertically */
  display: inline-block;
  vertical-align: middle;
}
#position.mobil{
  width: 100%;
  margin: 0 auto;
  text-align: center;
  /* Center Vertically */
  display: inline-block;
  vertical-align: middle;
}

#position.mobil h2{
  font-size: 22px;
}

#position.tablet h3{
  font-size: 25px;
}
#position.mobil h3{
  font-size: 20px;
}

#position.tablet h4{
  font-size: 22px;
}
#position.mobil h4{
  font-size: 18px;
}

#position.tablet p{
  font-size: 20px;
}
#position.mobil p{
  font-size: 17px;
}

#position.tablet div{
  font-size: 19px;
}
#position.mobil div{
  font-size: 16px;
}

#position.mobil img{
  max-width:350px;
  max-height:250px;
}
</style>
