<template>
    <Card>
        <Container>
            <h1>About ClickSpawn</h1>
            <div class="bg-white/30 p-5 py-2 overflow-y-scroll min-w-[380px] prose">
            <p>Ever have the dire need to create something... only to be stuck without an
            idea? When I'm blocked trying to decide what to make, sometimes I like to
            leave it to chance.</p>
            <p>In the spirit of progressing my skill tree, I decided to improve my webdev
            branch by creating this lil generator site <span class = "italic">because the
            world could use yet another idea generator.</span> A bit more whimsy, at the very least.
            I used Nuxt and Tailwind to build this, in case you were curious.</p>
            <p>The spawners each spit out a bunch of words within a handlful of labels
            that descibe a general form the words can be applied to.
            There is no right or wrong way to use the prompts, the labels
            can even be suggestions. Use whichever words resonate, and leave the rest!</p>
            <p>This website was inspired by the countless amazing generators out there,
            without which I would not have some of my favorite pieces of art,
            nor the really cool names for my MMO/D&D characters.
            The generator I would say inspired this site (and me!) the most, is
            <NuxtLink to="https://lightpusher.weebly.com/fantasy-genesis.html">
            a book called Fantasy Genesis by Chuck Lukacs</NuxtLink> that I have had for
            like a decade now. When looking for the link to his website, I found there is
            also an online version called
            <NuxtLink to="http://www.chucklukacs.com/">Genesis Generator</NuxtLink>
            which is pretty rad. I personally would recommend the physical book because
            it has awesome art and great advice and, most importantly, you get to roll
            dice!</p>
            <p>If you've found this to be useful in any way, or if you have suggestions
            on what I can add or improve, <a :href="emailLink">I'd love to hear about!</a></p>

            <h4>Have fun and keep making stuff!</h4>

            </div>
        </Container>
    </Card>
</template>


<script>
    export default {
  data() {
    return {
      email: 'bean@ldbean.com'
    }
  },
  computed: {
    emailLink() {
      return `mailto:${this.email}`;
    },
    displayEmail() {
      return this.email;
    }
  }
}
</script>

