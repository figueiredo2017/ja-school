import Vue from 'vue'

import Slides from '~/components/Slides.vue'
import PortfolioCard from '~/components/PortfolioCard.vue'
import FeatureCard from '~/components/FeatureCard.vue'
import FeatureBlock from '~/components/FeatureBlock.vue'
import CallToAction from '~/components/CallToAction.vue'
import Breadcrumb from '~/components/Breadcrumb.vue'
import HorizontalItem from '~/components/HorizontalItem.vue'
import ItemDescription from '~/components/ItemDescription.vue'
import RelatedItems from '~/components/RelatedItems.vue'
import Title from '~/components/Title.vue'
import Pagination from '~/components/Pagination.vue'


Vue.component('c-slides', Slides)
Vue.component('c-portfolio-card', PortfolioCard)
Vue.component('c-feature-card', FeatureCard)
Vue.component('c-feature-block', FeatureBlock)
Vue.component('c-call-to-action', CallToAction)
Vue.component('c-breadcrumb', Breadcrumb)
Vue.component('c-horizontal-item', HorizontalItem)
Vue.component('c-item-description', ItemDescription)
Vue.component('c-related-items', RelatedItems)
Vue.component('c-title', Title)
Vue.component('c-pagination', Pagination)
