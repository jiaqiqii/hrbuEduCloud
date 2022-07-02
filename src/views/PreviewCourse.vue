<template>
  <div class="previewcourse">
    <div class="course">
      <div class="video_box">
        <video
          ref="videoPlayer"
          class="video-js"
          poster="../assets/previewcourse.png"
         
        >
          <source
            src="../video/Good Luck(官方中字版)-art--AOA--art-03e8c8aafd53d4d7d7.mp4"
            type="video/mp4"
          />
        </video>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "VideoPlayer",
  data() {
    return {
      player: null,
    };
  },
  mounted() {
    // 播放参数
    let options = {
      controls: true, // 是否显示底部控制栏
      preload: "auto", // 加载<video>标签后是否加载视频
      autoplay: "muted", // 静音播放
      // playbackRates: [0.5, 1, 1.5, 2],// 倍速播放
      width: "780",
      height: "440",
      controlBar: {
        // 自定义按钮的位置
        children: [
          {
            name: "playToggle",
          },
          {
            name: "progressControl",
          },
          {
            name: "currentTimeDisplay",
          },
          {
            name: "timeDivider",
          },
          {
            name: "durationDisplay",
          },

          {
            name: "volumePanel", // 音量调整方式横线条变为竖线条
            inline: false,
          },
          {
            name: "pictureInPictureToggle", //画中画播放模式
          },
          {
            name: "fullscreenToggle",
          },
        ],
      },
    };
    this.player = this.$video(
      this.$refs.videoPlayer,
      options,
      function onPlayerReady() {
        console.log("onPlayerReady", this);
      }
    );
  },
  beforeDestroy() {
    if (this.player) {
      this.player.dispose();
    }
  },
  methods: {},
};
</script>

<style lang="less" scoped>
.previewcourse {
  .course {
    width: 100%;
    height: 100vh;
    background-color: #000;
    display: flex;
    justify-content: center;
    align-items: center;
    .video_box {
      width: 780px;
      height: 440px;
    .video-js {
      width: 780px;
      height: 440px;
    }
    }
  }
}
</style>