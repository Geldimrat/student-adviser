<template>
  <div class="landing">

    <section class="home" id="home">
      <div class="content">
        <div class="sides">
          <div class="left">
            <p class="quote">
              From zero to <br />
              <span>Master Degree!</span>
            </p>
            <p class="info">
              You can learn any course you want with us from zero to master
              degree with fun and practical way.You can learn any course you
              want with us from zero to master degre with fun and practical way.
            </p>
            <!-- <div class="registration">
              <nuxt-link to="/sign_in" class="login_btn">Sign in</nuxt-link>
              <nuxt-link to="" class="login_btn">Sign up</nuxt-link>
            </div> -->
            <div class="learn_journey_btn">
              <nuxt-link to="">Let’s start your learning journey!</nuxt-link>
            </div>
          </div>
          <div class="right">
            <div class="img">
              <img src="@/assets/images/home/7.jpg" alt="" />
            </div>
          </div>
        </div>
        <div class="counter">
          <div class="counter_card" v-for="(i, j) in statistics" :key="j">
            <div class="icon">
              <img :src="require(`@/static/home/${i.icon}`)" alt="" />
            </div>
            <div class="info">
              <p class="count">
                +<span>{{ i.count }}</span>
              </p>
              <p class="title">{{ i.title }}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="social_media">
        <div class="contact">
          <!-- <svg
            width="59"
            height="885"
            viewBox="0 0 59 885"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
          >
            <path
              d="M29.326 139.434L29.326 141.825C28.9339 141.893 28.5866 142.019 28.2841 142.202C27.9773 142.385 27.7173 142.613 27.5043 142.886C27.2912 143.159 27.1314 143.47 27.0249 143.819C26.9141 144.165 26.8587 144.537 26.8587 144.938C26.8587 145.65 27.0376 146.28 27.3956 146.83C27.7493 147.38 28.2692 147.81 28.9553 148.121C29.6371 148.432 30.4702 148.588 31.4545 148.588C32.456 148.588 33.2997 148.432 33.9858 148.121C34.6676 147.806 35.1832 147.376 35.5327 146.83C35.8778 146.28 36.0504 145.652 36.0504 144.944C36.0504 144.552 35.9993 144.186 35.897 143.845C35.7905 143.5 35.6349 143.191 35.4304 142.918C35.2259 142.641 34.9744 142.409 34.6761 142.221C34.3778 142.03 34.0369 141.898 33.6534 141.825L33.6662 139.434C34.2884 139.524 34.8722 139.718 35.4176 140.016C35.9631 140.31 36.4446 140.696 36.8622 141.173C37.2756 141.65 37.5994 142.209 37.8338 142.848C38.0639 143.487 38.179 144.197 38.179 144.976C38.179 146.127 37.9126 147.154 37.38 148.057C36.8473 148.961 36.0781 149.672 35.0724 150.192C34.0668 150.712 32.8608 150.972 31.4545 150.972C30.044 150.972 28.8381 150.71 27.8366 150.186C26.831 149.662 26.0618 148.948 25.5291 148.045C24.9964 147.141 24.7301 146.118 24.7301 144.976C24.7301 144.248 24.8324 143.57 25.0369 142.944C25.2415 142.317 25.5419 141.759 25.9382 141.269C26.3303 140.779 26.8118 140.376 27.3828 140.061C27.9496 139.741 28.5973 139.532 29.326 139.434ZM38.1918 133.082C38.1918 134.041 37.9808 134.872 37.5589 135.575C37.1371 136.278 36.5469 136.824 35.7884 137.212C35.0298 137.595 34.1435 137.787 33.1293 137.787C32.1151 137.787 31.2266 137.595 30.4638 137.212C29.701 136.824 29.1087 136.278 28.6868 135.575C28.2649 134.872 28.054 134.041 28.054 133.082C28.054 132.124 28.2649 131.293 28.6868 130.589C29.1087 129.886 29.701 129.343 30.4638 128.959C31.2266 128.572 32.1151 128.378 33.1293 128.378C34.1435 128.378 35.0298 128.572 35.7884 128.959C36.5469 129.343 37.1371 129.886 37.5589 130.589C37.9808 131.293 38.1918 132.124 38.1918 133.082ZM36.3381 133.07C36.3381 132.55 36.1953 132.115 35.9098 131.766C35.62 131.416 35.2322 131.156 34.7464 130.986C34.2607 130.811 33.7195 130.724 33.1229 130.724C32.522 130.724 31.9787 130.811 31.4929 130.986C31.0028 131.156 30.6129 131.416 30.3232 131.766C30.0334 132.115 29.8885 132.55 29.8885 133.07C29.8885 133.602 30.0334 134.045 30.3232 134.399C30.6129 134.749 31.0028 135.011 31.4929 135.185C31.9787 135.356 32.522 135.441 33.1229 135.441C33.7195 135.441 34.2607 135.356 34.7464 135.185C35.2322 135.011 35.62 134.749 35.9098 134.399C36.1953 134.045 36.3381 133.602 36.3381 133.07ZM32.2472 124.1L38 124.1L38 126.414L28.1818 126.414L28.1818 124.202L29.8501 124.202L29.8501 124.087C29.3004 123.861 28.8636 123.501 28.5398 123.007C28.2159 122.508 28.054 121.893 28.054 121.16C28.054 120.482 28.1989 119.892 28.4886 119.389C28.7784 118.882 29.1982 118.49 29.7479 118.213C30.2976 117.932 30.9645 117.793 31.7486 117.797L38 117.797L38 120.111L32.1065 120.111C31.4503 120.111 30.9368 120.282 30.5661 120.623C30.1953 120.959 30.0099 121.426 30.0099 122.023C30.0099 122.427 30.0994 122.787 30.2784 123.103C30.4531 123.414 30.7067 123.659 31.0391 123.838C31.3714 124.013 31.7741 124.1 32.2472 124.1ZM28.1818 110.542L29.9716 110.542L29.9716 116.187L28.1818 116.187L28.1818 110.542ZM25.8295 114.793L25.8295 112.479L35.0469 112.479C35.358 112.479 35.5966 112.432 35.7628 112.339C35.9247 112.241 36.0355 112.113 36.0952 111.955C36.1548 111.797 36.1847 111.623 36.1847 111.431C36.1847 111.286 36.174 111.154 36.1527 111.035C36.1314 110.911 36.1122 110.817 36.0952 110.753L37.9041 110.363C37.9467 110.487 37.9936 110.664 38.0447 110.894C38.0959 111.12 38.1257 111.397 38.1342 111.725C38.1513 112.304 38.0639 112.827 37.8722 113.291C37.6761 113.755 37.3736 114.124 36.9645 114.397C36.5554 114.665 36.044 114.797 35.4304 114.793L25.8295 114.793ZM38.1982 105.782C38.1982 106.404 38.0874 106.964 37.8658 107.463C37.6399 107.957 37.3075 108.349 36.8686 108.639C36.4297 108.925 35.8885 109.067 35.245 109.067C34.6911 109.067 34.233 108.965 33.8707 108.761C33.5085 108.556 33.2188 108.277 33.0014 107.923C32.7841 107.57 32.62 107.171 32.5092 106.728C32.3942 106.281 32.3111 105.818 32.2599 105.341C32.2003 104.766 32.147 104.299 32.1001 103.941C32.049 103.583 31.9723 103.323 31.87 103.161C31.7635 102.995 31.5994 102.912 31.3778 102.912L31.3395 102.912C30.858 102.912 30.4851 103.055 30.2209 103.34C29.9567 103.626 29.8246 104.037 29.8246 104.574C29.8246 105.141 29.9482 105.59 30.1953 105.923C30.4425 106.251 30.7344 106.472 31.071 106.587L30.7642 108.748C30.1676 108.577 29.669 108.296 29.2685 107.904C28.8636 107.512 28.5611 107.033 28.3608 106.466C28.1563 105.899 28.054 105.273 28.054 104.587C28.054 104.114 28.1094 103.643 28.2202 103.174C28.331 102.705 28.5142 102.277 28.7699 101.889C29.0213 101.501 29.3643 101.19 29.799 100.956C30.2337 100.717 30.777 100.598 31.429 100.598L38 100.598L38 102.822L36.6513 102.822L36.6513 102.899C36.924 103.04 37.1797 103.238 37.4183 103.494C37.6527 103.745 37.8423 104.062 37.9872 104.446C38.1278 104.825 38.1982 105.271 38.1982 105.782ZM36.4979 105.181C36.4979 104.717 36.4063 104.314 36.223 103.973C36.0355 103.632 35.7884 103.37 35.4815 103.187C35.1747 102.999 34.8402 102.906 34.478 102.906L33.321 102.906C33.3807 102.978 33.4361 103.102 33.4872 103.276C33.5384 103.447 33.5831 103.638 33.6214 103.852C33.6598 104.065 33.6939 104.276 33.7237 104.484C33.7536 104.693 33.7791 104.874 33.8004 105.028C33.8473 105.373 33.924 105.682 34.0305 105.955C34.1371 106.227 34.2862 106.442 34.478 106.6C34.6655 106.758 34.9084 106.837 35.2067 106.837C35.6328 106.837 35.9545 106.681 36.1719 106.37C36.3892 106.059 36.4979 105.663 36.4979 105.181ZM38.1918 93.9886C38.1918 94.9687 37.9766 95.8103 37.5462 96.5135C37.1158 97.2123 36.5213 97.7514 35.7628 98.1307C35 98.5057 34.1222 98.6932 33.1293 98.6932C32.1321 98.6932 31.2521 98.5014 30.4893 98.1179C29.7223 97.7344 29.1257 97.1932 28.6996 96.4943C28.2692 95.7912 28.054 94.9602 28.054 94.0014C28.054 93.2045 28.201 92.4993 28.495 91.8856C28.7848 91.2677 29.196 90.7755 29.7287 90.4091C30.2571 90.0426 30.875 89.8338 31.5824 89.7826L31.5824 91.9943C31.1094 92.0838 30.7152 92.2969 30.3999 92.6335C30.0803 92.9659 29.9205 93.4112 29.9205 93.9694C29.9205 94.4424 30.0483 94.8579 30.304 95.2159C30.5554 95.5738 30.9176 95.853 31.3906 96.0532C31.8636 96.2493 32.4304 96.3473 33.0909 96.3473C33.7599 96.3473 34.3352 96.2493 34.8168 96.0532C35.294 95.8572 35.6626 95.5824 35.9226 95.2287C36.1783 94.8707 36.3061 94.451 36.3061 93.9694C36.3061 93.6285 36.2422 93.3238 36.1143 93.0554C35.9822 92.7826 35.7926 92.5547 35.5455 92.3714C35.2983 92.1882 34.9979 92.0625 34.6442 91.9943L34.6442 89.7826C35.3388 89.838 35.9545 90.0426 36.4915 90.3963C37.0241 90.75 37.4418 91.2315 37.7443 91.8409C38.0426 92.4503 38.1918 93.1662 38.1918 93.9886ZM28.1818 82.9799L29.9716 82.9799L29.9716 88.6241L28.1818 88.6241L28.1818 82.9799ZM25.8295 87.2306L25.8295 84.9167L35.0469 84.9167C35.358 84.9167 35.5966 84.8698 35.7628 84.7761C35.9247 84.6781 36.0355 84.5502 36.0952 84.3926C36.1548 84.2349 36.1847 84.0602 36.1847 83.8684C36.1847 83.7235 36.174 83.5914 36.1527 83.4721C36.1314 83.3485 36.1122 83.2548 36.0952 83.1909L37.9041 82.8009C37.9467 82.9245 37.9936 83.1014 38.0447 83.3315C38.0959 83.5573 38.1257 83.8343 38.1342 84.1624C38.1513 84.742 38.0639 85.264 37.8722 85.7285C37.6761 86.193 37.3736 86.5616 36.9645 86.8343C36.5554 87.1028 36.044 87.2349 35.4304 87.2306L25.8295 87.2306ZM33.8707 70.3221L28.1818 70.3221L28.1818 68.0081L38 68.0081L38 70.2518L36.255 70.2518L36.255 70.354C36.8047 70.5756 37.2543 70.94 37.6037 71.4471C37.9531 71.9499 38.1278 72.5699 38.1278 73.3072C38.1278 73.9506 37.9851 74.5195 37.6996 75.0138C37.4098 75.5039 36.9901 75.8874 36.4403 76.1644C35.8864 76.4414 35.2173 76.5799 34.4332 76.5799L28.1818 76.5799L28.1818 74.266L34.0753 74.266C34.6974 74.266 35.1918 74.0955 35.5582 73.7546C35.9247 73.4137 36.108 72.9662 36.108 72.4123C36.108 72.0714 36.0249 71.7411 35.8587 71.4215C35.6925 71.1019 35.4453 70.8398 35.1172 70.6353C34.7848 70.4265 34.3693 70.3221 33.8707 70.3221ZM30.777 57.8688L31.0071 59.9781C30.794 60.0378 30.5938 60.1422 30.4063 60.2913C30.2188 60.4362 30.0675 60.6323 29.9524 60.8794C29.8374 61.1266 29.7798 61.4291 29.7798 61.7871C29.7798 62.2686 29.8842 62.6735 30.093 63.0016C30.3018 63.3254 30.5724 63.4852 30.9048 63.481C31.1903 63.4852 31.4226 63.3808 31.6016 63.1678C31.7805 62.9504 31.9276 62.5925 32.0426 62.0939L32.4006 60.4192C32.6009 59.4902 32.9183 58.7999 33.353 58.3482C33.7876 57.8922 34.3565 57.6621 35.0597 57.6578C35.6776 57.6621 36.223 57.8432 36.696 58.2011C37.1648 58.5548 37.5313 59.047 37.7955 59.6777C38.0597 60.3084 38.1918 61.0328 38.1918 61.851C38.1918 63.0527 37.9403 64.02 37.4375 64.753C36.9304 65.486 36.2251 65.9227 35.3217 66.0634L35.1044 63.807C35.5476 63.7047 35.8821 63.4874 36.108 63.155C36.3338 62.8226 36.4467 62.3901 36.4467 61.8574C36.4467 61.3077 36.3338 60.8666 36.108 60.5342C35.8821 60.1976 35.603 60.0293 35.2706 60.0293C34.9893 60.0293 34.7571 60.1379 34.5739 60.3553C34.3906 60.5683 34.25 60.9007 34.152 61.3524L33.8004 63.0271C33.6044 63.9689 33.2741 64.6656 32.8097 65.1173C32.3409 65.569 31.7486 65.7928 31.0327 65.7885C30.4276 65.7928 29.9034 65.6287 29.4602 65.2963C29.0128 64.9597 28.6676 64.4931 28.4247 63.8965C28.1776 63.2956 28.054 62.6031 28.054 61.819C28.054 60.6685 28.299 59.7629 28.7891 59.1024C29.2791 58.4377 29.9418 58.0264 30.777 57.8688Z"
              fill="white"
            />
            <line
              x1="29.6133"
              y1="51.6562"
              x2="29.6133"
              y2="-0.000400549"
              stroke="white"
            />
            <line
              x1="29.6134"
              y1="207.639"
              x2="29.6134"
              y2="155.983"
              stroke="white"
            />
            <line x1="28.5" y1="885" x2="28.5" y2="453" stroke="white" />
            <rect x="7" y="222" width="44" height="44" fill="url(#pattern0)" />
            <rect x="1" y="275" width="56" height="56" fill="url(#pattern1)" />
            <rect y="336" width="59" height="59" fill="url(#pattern2)" />
            <rect x="9" y="399" width="42" height="42" fill="url(#pattern3)" />
            <defs>
              <pattern
                id="pattern0"
                patternContentUnits="objectBoundingBox"
                width="1"
                height="1"
              >
                <use xlink:href="#image0_224_222" transform="scale(0.02)" />
              </pattern>
              <pattern
                id="pattern1"
                patternContentUnits="objectBoundingBox"
                width="1"
                height="1"
              >
                <use xlink:href="#image1_224_222" transform="scale(0.015625)" />
              </pattern>
              <pattern
                id="pattern2"
                patternContentUnits="objectBoundingBox"
                width="1"
                height="1"
              >
                <use xlink:href="#image2_224_222" transform="scale(0.015625)" />
              </pattern>
              <pattern
                id="pattern3"
                patternContentUnits="objectBoundingBox"
                width="1"
                height="1"
              >
                <use
                  xlink:href="#image3_224_222"
                  transform="scale(0.0208333)"
                />
              </pattern>
              <image
                id="image0_224_222"
                width="50"
                height="50"
                xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAAD3ElEQVRYCe2YTUgUYRjHd2ddaYMOmyVFqfnJikkeooKEwAoxo6KgW0jHCMzoYLcUgqxTXroYBRZBp6QgKQmFDlFYaRdXVHZhSSoPFn2wfuxOv1ca2Xl913FnXXaJWf7Pzvt8zPM+/+d9Z2dmXS7n43TA6YDTAacDTgfsd8AtnzoxMbEV2xW3272PYwGygGQVuq5rfGIUMRqLxXqqqqreMjbBRCQSiWyem5sbJWInkquIQ+xUZWXls8QCtUQlGo22oucyCcpzaeyWG2KQKHmJCgF7EnVpPIv/EbYIkmn46PoZJtmNqFAdCoU2lJaWRg2niQjGfCQZ/CQ/j1xiWe8mC0rXPjU1Vcscj8lTjSSDxiXgxblMxLS1cFhhI6vSMzk52SeuJ6vgVPwU74ZEO8f3nLcaCdwrkSoRI8NJOjICoYOGIZ3j2NhYAST6INFFHtFpDqnBkgjJxa+YKmsRxiF+rjuIscxDrBIQqPd6vR9xnkBU+IJxBlkVlgWwlS5SaCdZYoiMPPzXKOZlOBzeLjtX08mp/WvCIHFFyAoQM8D9ow7H8rXAWAlLIiSLc3F3uFyuo8g0osLhxcXFEQprVDllmyAN+QHRBHzyDw4mV4x5OysqKprKysq+CoOVWBIxEpB0UNd10Z1+wyYdCymsHzJdxHkk37KKv1GQxtCAqDDN+UdE88gXUwWobJrKmMxG8pny8vJmJmgjZgGRgcvdTrdfjY+P70h0Dg8Pe/lx6CZANKIw0Zcwfg6JOuYZcqX4SYmIyE0hOmS62bv1jEPCppBDHo9nBELNwsfNa5ff73/NuBVxIzLmydVG3uOQmJGda9FTJmIkZe++o3sH0F8gKmzB/5StdIcHvTeM96uCsImt1AgJsVo6ui3YJiJm47r5RgFNdPMq+iIiQzwXXcC4DVGhH4K2tpKcLC0iIhkkxFa7SUGi4xPCtgb5Q0wLjThmdytxvglpEzGyUdAHbmyCzBPDluQYjsfjDZDoTeK3ZdZsnZXkpJKSklkKPI27hZX6zdEEbA95tKlVvRiZAm0o60rEmB8yvZqm7UX/hAj84quF6+lcTU2NGKOuLzJCRJTIu0KQG189185tSNULcsKeKVE9HqzbXIFA4CfJLiMZR8ZWJOOVSxM4RKSGZF11ViTrSyAV4KyI1JCsq//NiljeELkzB3izm89yy/Pl+XnHMb27yERWPIbzeHFPTpID+mf5mU3eWg8oUvWChDmncF+uxkSEBzvxd+VZgqaQXMQPirrFdr/O0QTVHwFLAcFgcJPP58tbUnLkq7i4+DvvNHqOlOOU4XTA6YDTAacD/1EH/gLHa0c0tUWJYAAAAABJRU5ErkJggg=="
              />
              <image
                id="image1_224_222"
                width="64"
                height="64"
                xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABmJLR0QA/wD/AP+gvaeTAAACxUlEQVRYCe2Yv4sTQRTHdycREUSRUziCYpENBJvjFPzRqIi9nYW1jc01onbWitx/YGWpYCl2gWsEK7GKJDnxFA7lVERscpD1Mweux+aHb7nZdYa88H2ZH/vy5r3vvJnJbBTpRxlQBpQBZUAZUAaUAWVgPhmIi4Td7/dPxHG8mqbpWX53EvEJH3DmFXI3SZKPlCLEIi2Uut1uo16vv6W6gPiM7zi3JCXBoCxCrVZ7hKLvweNidIQMfWArEhETQOpfjgL54OtFqat1qSJ6DSQDKSZePtmPSqywP6W7zB/fVZ9ZFWfATCsBP1QCAp48J64X2QOcDCgx0uv1zrOR3UD3ErKI7EP+4AuVDnvQLco9wysCCPwQgT8hqmvINNhj7se0h0X7vSGA4PcT/EsCuIBUBlPZSP8YiODvo1Jp8IwXeUHAYDA4jDMrSOXwYgnw1/UKkR9EJoHH6TsyZB35ZRUo+7Z0IV4QQCBnkEkY0Xm11Wp1KEuBKcVqcaNHp/zEHnelBW/H9IWAA9aZvJD7G/k+123j2qBLe6z1bZf2JtnymoBJDrvum3sCKj8FuLffZm0fy83k6Vx7p4neOf4hjr3dMcasNZvNFztKe/yqnACCusnabkv8Rm8JPSsUfzEajT7TckJAqEtgHQKcIEgCeEH73kn0GAmSgOFwONcEbLXb7Z9MnhNUvgni9Sqb2wJlBjbG6zTGTgL6X7PjP+dZBjbArazhoFI5AVxsHuf95mg8Rd8YARD1huPuIc9KQ5B7gEs2lACXbIZoSzMgxFlz6bNmgEs2Q7SlGRDirLn0WTPAJZsh2pr7DIils8aFZRPdRSQEbCZJ0pA4WiQD1iQGfdDhGt2R+mGkilxN72D4m1T/P+p9Zex7iAhiAriXbxhjliHiGZbtIBRewb4oeYpHy7xz+ESpUAaUAWVAGVAGlAFlQBlQBmYw8BstxIlgcInNoQAAAABJRU5ErkJggg=="
              />
              <image
                id="image2_224_222"
                width="64"
                height="64"
                xlink:href="data:image/png;base64,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"
              />
              <image
                id="image3_224_222"
                width="48"
                height="48"
                xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABmJLR0QA/wD/AP+gvaeTAAAFEklEQVRYCe2Za2gcVRTHZzabLC02ptFWspgPeRHbxEJLPrRIpcFaqoiPCrZoPtTS1AdiCwbBloAoKlJpwfhBfCBoFbWQgJYgirbQQimmD0tT0uwmbLJ0USlJ1hizu8lm/Z2QHSbbO/vIjt0Bdzj/nJlz7zn3f+49M3tnomnFozgD/+8Z0AuRvs/n26Lr+i7GbgUrgQv8Ca5h/97lcnXX1NRMcG0poVBoudfr/Uc390gazTY7zwcHB9dArouYDwBLSSQSY/R7c3R09IPW1tZZc8eBgQGv2+1+DdtgfX19l5EAs7KK7E+XlJRsJ/uAZvMxNDT0CMS+IuwKkK30RqPRnWVlZTMktBmnXcR4Bj02Ozt7D8ekkYDf7++g4TC4ShL3kUTaJaRf1gL5rQzci0MpyFVCOEiZLUPPC7Eea2ho+E4upPZECx6WP2BtPB7/JRAIVHGetwwPD9/FgMcJtBTyuGle/hjkOX81SZ5yqjEn0ExjUtazRGcpq6akYaka8p34VoB8JUKslyjzU1ItrOpFKqXZXEIzjOAGZvkbpxfI+JjZmO15MBhcRg3foP9ykK+ME0DieNAavA7B621jBcgsKg0puA37F6zEp5CpTGnLeBmJRLbSSQZF5S1yH8yTJ9LnPIHeQWtGAmQU0CwOktgDGR/LdqC/v7/MopvK3Kwy5mn7uK6u7lld1xMSx0iAizPAUnCoJMmjHo+HEvR3sCrllp0XGvCpWji1RTF+OzO/j7hzyYDmBL5JGjPoatoPEyRIJp+Bh/r6+pRPGAZ009c2oeY/SQ1m3MTSAJmT6C1a7keYhM5B+Ff0hbm5uQBPiOvofYR6A9ghMWbfkxpo0Qzx/G9j4N/odAfIRW6H/DYctqE1ktAgz6WtMqmK5koaR0ZGVjY2Nl6HwB5sUeA0mVARciWNsVjMz435JbMnj7392P8CTpKApjiMEoK4ZPg0fQQox8mQipGxApTOWVUHp9iY4IsqLkYCbFdlt6jq4wgbCSgn2EhgfHz8OEwDmgMPqmOM7f0VFTUjgZaWlhmy3EunBHCUwKsbxFWkjASkkT3Gz3Q8KudOApx6rPgsSkA61dbWduBwhHOnrESQd+Mf4aOUmxKAfIKVeIW6247HZVBQgceHqS/2ZkI3JSCN8hoYDodPksgGEmrDdhUUQibZknyUbmC3qhGnTRUVFT3s/1XNt9L2LtubG+kGVK4Ar4G9OA2DQsrvvJe/n4mAMoGmpqYYpbMf50LeyC/Kdx84pBVlAuJB/Z9Ad4JCyNfs/XuyGdgyAXEmyFvol0EM3CrxsfrPZztY2gQkCEl08Shbz7nMSBz9nwnEp8CTrH4420EWvVJmcuJLmHxYfZB+94LHQR2wSyJsKB/lh/SnXAJmXAFzMG6qEIP8gO1uYCd5eQPckSt5OGhZrwBva+UsbzvldBBdKc424Q9iPsEXB+V2OdMYaRMgsAvi65j1NgK1g3JgmzAR5wj2FDU/il6S6Gwb1kF0tXijV6BXLaCF6/sZxM7ZJvS8RIj7OiXzHjqvB4N7enp6gH8gbCbQIUJXAUOwGec2ncgP47fE7WTWfXbENEpI/r00NTX1HMH3EngtsFPk03g3sY/wWD5vZ2AjAXNQ6n4jg+3WNG0HkJJC5SxC+jRxTvA99Vh1dfVYzhGycFAmYPZjR9rA7nQjtk2QWYO+cwGSWAnn8qMzgZZd4xV0Pzf9pdLS0jOQnua6KMUZKM5AcQasZ+Bf7iS3jMBrWEsAAAAASUVORK5CYII="
              />
            </defs>
          </svg> -->
        </div>
        <div class="linear_circle">
          <svg
            width="120"
            height="261"
            viewBox="0 0 120 261"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M258.5 130.5C258.5 198.905 202.31 254.5 132.82 254.5C63.3298 254.5 7.13953 198.905 7.13953 130.5C7.13953 62.0948 63.3298 6.5 132.82 6.5C202.31 6.5 258.5 62.0948 258.5 130.5Z"
              stroke="url(#paint0_linear_50_308)"
              stroke-opacity="0.5"
              stroke-width="13"
            />
            <defs>
              <linearGradient
                id="paint0_linear_50_308"
                x1="132.82"
                y1="0"
                x2="132.82"
                y2="261"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#4A6AFA" />
                <stop offset="1" stop-color="#D48FFF" stop-opacity="0.5" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
      <div class="circle">
        <svg
          width="83"
          height="146"
          viewBox="0 0 83 146"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="10.3552"
            cy="73.3553"
            r="67.4572"
            transform="rotate(-91.5212 10.3552 73.3553)"
            stroke="url(#paint0_linear_50_329)"
            stroke-opacity="0.4"
            stroke-width="10"
          />
          <defs>
            <linearGradient
              id="paint0_linear_50_329"
              x1="10.3552"
              y1="0.898018"
              x2="10.3552"
              y2="145.813"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#D22BFF" />
              <stop offset="1" stop-color="#5466FB" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </section>

    <section class="courses" id="courses">
      <div class="content">
        <p class="title">Special <span>Courses</span> for you</p>
        <div class="lessons_content">
          <div class="sort_and_search">
            <div class="sort">
              <button class="sort_btn">All</button>
              <button class="sort_btn active">Top Ranking</button>
            </div>
            <div class="search">
              <input type="text" placeholder="search..." class="input_search" />
            </div>
          </div>
          <div class="lessons">
            <CardLesson v-for="(e, j) in courses" :key="j" :course="e" />
          </div>
        </div>
      </div>
      <div class="all_courses">
        <div class="all_courses_content">
          <p class="desc">
            You can find here all of courses related to Information technology!
          </p>
          <nuxt-link to="/all_courses" class="show_all_course_btn">
            <span>Show all courses</span>
            <svg
              width="53"
              height="53"
              viewBox="0 0 53 53"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="26.5" cy="26.5" r="26.5" fill="#5A74FA" />
              <path d="M22 17L32 26L22 35" stroke="white" stroke-width="3" />
            </svg>
          </nuxt-link>
        </div>
      </div>
    </section>

    <section class="individual_class" id="individual_class">
      <div class="content">
        <p class="title">
          We have <span>individual classes</span> for students
        </p>
        <div class="contact_sides">
          <div class="left">
            <img src="@/assets/images/individual_class/6.png" alt="" />
          </div>
          <div class="right">
            <div class="form">
              <div class="input">
                <label for="name">Name:</label>
                <input type="text" id="name" required autocomplete="off" />
              </div>
              <div class="input">
                <label for="email">Email:</label>
                <input type="email" id="email" required autocomplete="off" />
              </div>
              <div class="input">
                <label for="age">Age:</label>
                <input type="number" id="age" required autocomplete="off" />
              </div>
              <div class="input">
                <label for="course">Which course do you want to study:</label>
                <input type="text" id="course" required autocomplete="off" />
              </div>
              <div class="input">
                <label for="question">Other questions:</label>
                <textarea id="question"></textarea>
              </div>
              <button class="send_btn">Send</button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="about" id="about">
      <div class="content">
        <p class="title">About us</p>
        <div class="about_sides">
          <div class="left">
            <img src="@/assets/images/about/2.png" alt="" />
          </div>
          <div class="right">
            <p class="main_text">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
            <p class="about_us_text">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries,
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="our_team">
      <div class="content">
        <p class="title">Our Team</p>
        <div class="hooper">
          <hooper :settings="hooperSettings">
            <slide>
              <div class="card_person">
                <div class="avatar">
                  <img src="@/assets/images/team/2.png" alt="" />
                </div>
                <div class="person_info">
                  <p class="name">John peter</p>
                  <p class="job">COO</p>
                </div>
              </div>
            </slide>
            <slide>
              <div class="card_person">
                <div class="avatar">
                  <img src="@/assets/images/team/3.png" alt="" />
                </div>
                <div class="person_info">
                  <p class="name">John peter</p>
                  <p class="job">COO</p>
                </div>
              </div>
            </slide>
            <slide>
              <div class="card_person">
                <div class="avatar">
                  <img src="@/assets/images/team/2.png" alt="" />
                </div>
                <div class="person_info">
                  <p class="name">John peter</p>
                  <p class="job">COO</p>
                </div>
              </div>
            </slide>
          </hooper>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { Hooper, Slide } from 'hooper'
import 'hooper/dist/hooper.css'
import CardLesson from '@/components/lesson_card.vue'
export default {
  name: 'IndexPage',
  components: {
    Hooper,
    Slide,
    CardLesson,
  },
  data() {
    const statistics = [
      {
        id: 1,
        title: 'Courses',
        icon: '1.svg',
        count: 20,
      },
      {
        id: 2,
        title: 'Students',
        icon: '2.svg',
        count: 560,
      },
      {
        id: 3,
        title: 'Instructors',
        icon: '3.svg',
        count: 235,
      },
    ]

    const courses = [
      {
        id: 1,
        img: '1.png',
        title: 'Data analytics and business intelligense',
        lessons_name: 'Python, SQL, Tableau, ETL, Power BI',
        stars: 5,
      },
      {
        id: 2,
        img: '3.png',
        title: 'App development',
        lessons_name: 'Dart, Flutter',
        stars: 5,
      },
      {
        id: 3,
        img: '2.png',
        title: 'UI/UX design',
        lessons_name: 'Adobe XD, Figma',
        stars: 5,
      },
    ]

    return {
      statistics,
      courses,
    }
  },
  computed: {
    hooperSettings() {
      const settings = {
        itemsToShow: 4,
        // centerMode: true,
        autoPlay: true,
        playSpeed: 5000,
        transition: 1100,
        hoverPause: true,
        infiniteScroll: true,
        wheelControl: false,
        breakpoints: {
          1200: {
            itemsToShow: 4,
          },
          800: {
            itemsToShow: 4,
          },
          750: {
            itemsToShow: 1,
          },
          600: {
            itemsToShow: 1.05,
          },
          500: {
            itemsToShow: 1.05,
          },
          300: {
            itemsToShow: 1.05,
          },
        },
      }
      return settings
    },
  },
  mounted() {
    let nav_bar = document.querySelector('.header')

    let section = document.querySelectorAll('section')
    let links = document.querySelectorAll('.links')
    links[0].classList.add('active')

    window.onscroll = () => {
      if (scrollY > 20) {
        nav_bar.classList.add('scrolled_nav')
      } else {
        nav_bar.classList.remove('scrolled_nav')
      }

      section.forEach((sec) => {
        let top = scrollY
        let offset = sec.offsetTop
        let height = sec.offsetHeight
        if (top >= offset && top < offset + height) {
          // let listsArray = Array.from(links)
          let sec_id = sec.getAttribute('id')
          // let target = ''
          links.forEach((e) => {
            if (e.getAttribute('href').includes(sec_id)) {
              activeLink(e)
              // console.log(e)
            }
          })
          // activeLink(target)
          // console.log(target)
          // console.log(link_href)
        }
      })
    }

    function activeLink(a) {
      links.forEach((item) => item.classList.remove('active'))
      a.classList.add('active')
    }
  },
}
</script>
