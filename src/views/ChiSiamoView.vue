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
      :HowSeetheMarketDescription="'There are no advanced platforms that comprehensively understand business dynamics (silosapproach, from financials, to controlling, to digital marketing) <span><br><br></span>Decisions are drawn from subjective valuations and past experiences. Still no systematic use of organized data to draw scenarios and make decisions, especially in smaller companies <span><br><br></span>Low level of connection between strategic thinking and lower levels of an organization. This means low level of engagement and motivation and missed opportunities by lack of listening <span><br><br></span>There are no intelligent tech platforms that really connect intermediaries (advisors, accountants,  banks, etc.) with their clients leveraging on data enabling new ways to offer services'"
    />
    
  </div>
</template>
<script setup>
import OurManifesto from "@/components/ChiSiamoView/OurManifesto.vue";
import ChiSiamoBg from "@/assets/images/Chi-Siamo-Bg.png";
</script>
