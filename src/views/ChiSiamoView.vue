<template>
  <div class="relative">
    <img
      :src="ChiSiamoBg"
      alt="Background"
      class="absolute inset-0 w-full h-auto object-cover -z-1"
    />

    <OurManifesto
      :OurManifestoTitle="'Our Manifesto'"
      :OurManifestoDescription="'We envision a business approach where the creative power of people is amplified by the use of meaningful, comprehensive yet easy to understand information <span><br><br></span> \
                                 We envision a platform rooted in a strong technological background that is open to the added value that each partner can bring to its clients <span><br><br></span> \
                                 We see an ecosystem of knowledge and wisdom, not just data, where different actors can contribute, with their story, to a more accurate understanding of business dynamics <span><br><br></span> \
                                 We believe technology is an essential part of our lives but cannot replace the great creative power of human connections and collaboration…it can eventually augment it.<span><br><br></span> \
                                 This is what we call Augmented Advisory Platform'"
      :HowSeeTheMarketTitle="'How we see the market'"
      :HowSeetheMarketDescription="'We envision a business approach where the creative power of people is amplified by the use of meaningful, comprehensive yet easy to understand information <span><br><br></span> \
                                    We envision a platform rooted in a strong technological background that is open to the added value that each partner can bring to its clients <span><br><br></span> \
                                    We see an ecosystem of knowledge and wisdom, not just data, where different actors can contribute, with their story, to a more accurate understanding of business dynamics <span><br><br></span> \
                                    We believe technology is an essential part of our lives but cannot replace the great creative power of human connections and collaboration…it can eventually augment it.<span><br><br></span> \
                                    This is what we call Augmented Advisory Platform'"
    />
    <MoreInformation
      :MoreInformationBg="MoreInformationBg"
      :MoreInformationText="'Desideri maggiori informazioni?'"
      :MoreInformationButtonText="'Contattaci'"
      :MoreInformationIcon="EnvelopeIcon"
    />
    <ContactForm
      :ContactFormBg="ContactFormBg"
      :contactFormTitle="'Stay tuned!'"
    />
  </div>
</template>
<script setup>
import OurManifesto from "@/components/ChiSiamoView/OurManifesto.vue";
import MoreInformation from "@/components/HomeView/MoreInformation.vue";
import ContactForm from '@/components/HomeView/ContactForm.vue'
import MoreInformationBg from "@/assets/images/MoreInformationBg.png";
import EnvelopeIcon from "@/components/icons/EnvelopeIcon.vue";
import ContactFormBg from "@/assets/images/ContactForm.png";
import ChiSiamoBg from "@/assets/images/Chi-Siamo-Bg.png";
</script>
