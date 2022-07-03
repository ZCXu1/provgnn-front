<template>
<!--  <div class="navbar">-->
<!--&lt;!&ndash;    <hamburger :is-active="sidebar.opened" class="hamburger-container" @toggleClick="toggleSideBar" />&ndash;&gt;-->

<!--&lt;!&ndash;    <breadcrumb class="breadcrumb-container" />&ndash;&gt;-->

<!--    <div class="right-menu">-->
<!--&lt;!&ndash;      <el-dropdown class="avatar-container" trigger="click">&ndash;&gt;-->
<!--&lt;!&ndash;        <div class="avatar-wrapper">&ndash;&gt;-->
<!--&lt;!&ndash;          <img :src="avatar+'?imageView2/1/w/80/h/80'" class="user-avatar">&ndash;&gt;-->
<!--&lt;!&ndash;          <i class="el-icon-caret-bottom" />&ndash;&gt;-->
<!--&lt;!&ndash;        </div>&ndash;&gt;-->
<!--&lt;!&ndash;        <el-dropdown-menu slot="dropdown" class="user-dropdown">&ndash;&gt;-->
<!--&lt;!&ndash;          <router-link to="/">&ndash;&gt;-->
<!--&lt;!&ndash;            <el-dropdown-item>&ndash;&gt;-->
<!--&lt;!&ndash;              Home&ndash;&gt;-->
<!--&lt;!&ndash;            </el-dropdown-item>&ndash;&gt;-->
<!--&lt;!&ndash;          </router-link>&ndash;&gt;-->
<!--&lt;!&ndash;          <a target="_blank" href="https://github.com/PanJiaChen/vue-admin-template/">&ndash;&gt;-->
<!--&lt;!&ndash;            <el-dropdown-item>Github</el-dropdown-item>&ndash;&gt;-->
<!--&lt;!&ndash;          </a>&ndash;&gt;-->
<!--&lt;!&ndash;          <a target="_blank" href="https://panjiachen.github.io/vue-element-admin-site/#/">&ndash;&gt;-->
<!--&lt;!&ndash;            <el-dropdown-item>Docs</el-dropdown-item>&ndash;&gt;-->
<!--&lt;!&ndash;          </a>&ndash;&gt;-->
<!--&lt;!&ndash;          <el-dropdown-item divided @click.native="logout">&ndash;&gt;-->
<!--&lt;!&ndash;            <span style="display:block;">Log Out</span>&ndash;&gt;-->
<!--&lt;!&ndash;          </el-dropdown-item>&ndash;&gt;-->
<!--&lt;!&ndash;        </el-dropdown-menu>&ndash;&gt;-->
<!--&lt;!&ndash;      </el-dropdown>&ndash;&gt;-->
<!--    </div>-->
<!--  </div>-->
</template>

<script>
import { mapGetters } from 'vuex'
import Breadcrumb from '@/components/Breadcrumb'
import Hamburger from '@/components/Hamburger'

export default {
  components: {
    Breadcrumb,
    Hamburger
  },
  computed: {
    ...mapGetters([
      'sidebar',
      'avatar'
    ])
  },
  methods: {
    toggleSideBar() {
      this.$store.dispatch('app/toggleSideBar')
    },
    async logout() {
      await this.$store.dispatch('user/logout')
      this.$router.push(`/login?redirect=${this.$route.fullPath}`)
    }
  }
}
</script>

<style lang="scss" scoped>
.navbar {
  height: 50px;
  overflow: hidden;
  position: relative;
  background: #fff;
  box-shadow: 0 1px 4px rgba(0,21,41,.08);

  .hamburger-container {
    line-height: 46px;
    height: 100%;
    float: left;
    cursor: pointer;
    transition: background .3s;
    -webkit-tap-highlight-color:transparent;

    &:hover {
      background: rgba(0, 0, 0, .025)
    }
  }

  .breadcrumb-container {
    float: left;
  }

  .right-menu {
    float: right;
    height: 100%;
    line-height: 50px;

    &:focus {
      outline: none;
    }

    .right-menu-item {
      display: inline-block;
      padding: 0 8px;
      height: 100%;
      font-size: 18px;
      color: #5a5e66;
      vertical-align: text-bottom;

      &.hover-effect {
        cursor: pointer;
        transition: background .3s;

        &:hover {
          background: rgba(0, 0, 0, .025)
        }
      }
    }

    .avatar-container {
      margin-right: 30px;

      .avatar-wrapper {
        margin-top: 5px;
        position: relative;

        .user-avatar {
          cursor: pointer;
          width: 40px;
          height: 40px;
          border-radius: 10px;
        }

        .el-icon-caret-bottom {
          cursor: pointer;
          position: absolute;
          right: -20px;
          top: 25px;
          font-size: 12px;
        }
      }
    }
  }
}
</style>
