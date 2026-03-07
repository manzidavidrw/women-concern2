<template>
  <!-- Pass :current-page so navbar knows which page is active (needed for anchor scroll logic) -->
  <NavBar :current-page="page" @navigate="goTo" />

  <WhoWeAre v-if="page === 'who-we-are'" @navigate="goTo" />
  <OurMission v-else-if="page === 'our-mission'" @navigate="goTo" />
  <OurHistory v-else-if="page === 'our-history'" @navigate="goTo" />
  <DonorsPartners v-else-if="page === 'donors-partners'" @navigate="goTo" />
  <Contactus v-else-if="page === 'contact-us'" @navigate="goTo" />
  <BlogIndex v-else-if="page === 'blog'" @navigate="goTo" />
  <BlogPost v-else-if="page.startsWith('blog-')" :post-id="Number(page.replace('blog-', ''))" @navigate="goTo" />
  <ourBoard v-else-if="page === 'our-board'" @navigate="goTo" />
  <PartnershipsPage v-else-if="page === 'partnerships'" @navigate="goTo" />
  <WhatWeDo v-else-if="page === 'what-we-do'" @navigate="goTo" />

  <main v-else>
    <HeroSection @navigate="goTo" />
    <ImpactStats />
    <DonateBanner />
    <MalkiaPads />
    <OurStory />
    <ProjectsBlog />
    <BoardMembers />
    <GetInvolved />
    <OurDonors />
  </main>
  <SiteFooter />
</template>

<script setup>
import NavBar from './components/NavBar.vue'
import HeroSection from './components/HeroSection.vue'
import ImpactStats from './components/ImpactStats.vue'
import DonateBanner from './components/DonateBanner.vue'
import MalkiaPads from './components/MalkiaPads.vue'
import OurStory from './components/OurStory.vue'
import ProjectsBlog from './components/ProjectsBlog.vue'
import BoardMembers from './pages/ourboard.vue'
import GetInvolved from './components/GetInvolved.vue'
import OurDonors from './pages/PartnershipsPage.vue'
import SiteFooter from './components/SiteFooter.vue'
import WhoWeAre from './pages/Aboutus.vue'
import OurMission from './pages/OurMission.vue'
import OurHistory from './pages/OurHistory.vue'
import DonorsPartners from './pages/DonorsPartners.vue'
import Contactus from './pages/Contactus.vue'
import ourBoard from './pages/ourboard.vue'
import PartnershipsPage from './pages/PartnershipsPage.vue'
import WhatWeDo from './pages/WhatWeDo.vue'
import BlogIndex from './pages/BlogIndex.vue'
import BlogPost from './pages/BlogPost.vue'
import { ref } from 'vue'

const page = ref('home')

const goTo = (p) => {
  page.value = p
  window.scrollTo({ top: 0, behavior: 'smooth' })
}
</script>