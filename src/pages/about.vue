<template>
    <div class="about">
        <h1>About</h1>
        <p>Wrong Design Apparel started as a cheaper
            alternative to paying for band  merch for my friend Tristan and I.
            Quickly we learned that spray paint
            and a tshirt means  infinite possibilities for a couple of teenagers.
            We started experimenting with designs and messages that we loved and this
            turned into a very expressive hobby.
            As we wore these shirts to school or concerts people started
            to ask us about their origin.
            This lead to a sharing of methods and excitement with  strangers and pals.
            Now, the craft has hit a point where sale feels like a  viable next step.
            If you see something you dig,
            know that it is in fact one of a kind,
            made by a punk kid who is ecstatic that he is making money doing what he loves.<br/>
            Any questions? <a href="mailto:jtwright@knox.edu">jtwright@knox.edu</a>
            <br/>
            <span class="spoiler">That same kid programmed this site, in vue, and set up the RESTful
                api that runs the mongo DB for all the products so if you are looking
                for a developer, hmu.
                This site is FOSS and up as a github repo under the username itsjtwrong.
            </span>
        </p>
    </div>
</template>

<script>

export default {
  name: 'cart',
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
p {
    font-size:18px;
    margin: 0 10px 0 10px;
    line-height:27px;
}
    .spoiler{
  color: black;
  background-color:black;
}

.spoiler:hover{
  color: white;
  }
</style>
