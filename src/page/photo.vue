<template>
    <div class="container pad_t75">
        <!--<waterfall
            :line-gap="320"
            :min-line-gap="320"
            :max-line-gap="640"
            :single-max-width="640"
            :watch="">
            <waterfall-slot
                v-for=""
                :width=""
                :height=""
                :order=""
                :key=""
                move-class="photo_move">
                <div class="panel photo_box hover_sh">
                    <div class="photo_box_top">
                        <span class="photo_like" @click=""><i class="iconfont icon-like"></i> </span>
                    </div>
                    <img :src="" @click="">
                </div>
            </waterfall-slot>
        </waterfall>-->
        <div class="panel_msg">
            <template v-if="true">加载更多</template>
            <template v-if="false">加载中...</template>
            <template v-if="false">没有更多照片啦</template>
        </div>
        <photoModal>
        </photoModal>
    </div>
</template>

<script>
import { waterfall, waterfallSlot } from 'vue-waterfall'
import photoModal from '../components/photoModel'

export default {
  components: {
    'waterfall': waterfall,
    'waterfallSlot': waterfallSlot,
    photoModal
  }
}
</script>

<style>

</style>
