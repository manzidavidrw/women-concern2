<template>
  <NavBar :current-page="page" @navigate="goTo" />

  <WhoWeAre v-if="page === 'who-we-are'" @navigate="goTo" />
  <OurMission v-else-if="page === 'our-mission'" @navigate="goTo" />
  <OurHistory v-else-if="page === 'our-history'" @navigate="goTo" />
  <DonorsPartners v-else-if="page === 'donors-partners'" @navigate="goTo" />
  <Contactus v-else-if="page === 'contact-us'" @navigate="goTo" />
  <BlogIndex v-else-if="page === 'blog'" @navigate="goTo" />
  <BlogPost v-else-if="page.startsWith('blog-')" :post-id="Number(page.replace('blog-', ''))" @navigate="goTo" />
  <WhatWeDo v-else-if="page === 'what-we-do'" @navigate="goTo" />
  <MalkiaPadsPage v-else-if="page === 'malkia-pads'" @navigate="goTo" />
  <GlfxKivu v-else-if="page === 'glfx-kivu'" @navigate="goTo" />
  <CareerPage v-else-if="page === 'career'" @navigate="goTo" />
  <PartneringPage v-else-if="page === 'partnering'" @navigate="goTo" />
  <VolunteerPage v-else-if="page === 'volunteer'" @navigate="goTo" />

  <!-- ✅ NEW: ADMIN PAGE -->
  <Admin v-else-if="page === 'admin'" />

  <!-- Program Detail Pages -->
  <ProgramDetail v-else-if="page.startsWith('program-')" :program-id="page" @navigate="goTo" />

  <main v-else>
    <HeroSection @navigate="goTo" />
    <ImpactStats />
    <DonateBanner />
    <MalkiaPads />
    <OurStory />
    <ProjectsBlog @navigate="goTo" />
    <ourboard />
    <GetInvolved @navigate="goTo" />
    <PartnershipsPage />
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
import ourboard from './pages/ourboard.vue'
import GetInvolved from './components/GetInvolved.vue'
import PartnershipsPage from './pages/PartnershipsPage.vue'
import SiteFooter from './components/SiteFooter.vue'
import WhoWeAre from './pages/Aboutus.vue'
import OurMission from './pages/OurMission.vue'
import OurHistory from './pages/OurHistory.vue'
import DonorsPartners from './pages/DonorsPartners.vue'
import Contactus from './pages/Contactus.vue'
import ProgramDetail from './components/ProgramDetail.vue'
import WhatWeDo from './pages/Whatwedo.vue'
import BlogIndex from './pages/BlogIndex.vue'
import BlogPost from './pages/BlogPost.vue'
import MalkiaPadsPage from './pages/Malkiapads.vue'
import GlfxKivu from './pages/Glfxkivu.vue'
import CareerPage from './pages/Careerpage.vue'
import PartneringPage from './pages/Partneringpage.vue'
import VolunteerPage from './pages/VolunteerPage.vue'

/* ✅ NEW IMPORT */
import Admin from './pages/Admin.vue'

import { ref } from 'vue'

const page = ref('home')

const goTo = (p) => {
  page.value = p
  window.scrollTo({ top: 0, behavior: 'smooth' })
}
</script>