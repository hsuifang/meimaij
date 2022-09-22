<script setup>
import JWT from '@/api/cookies'
import { apiSignIn } from '@/api'

// router
const router = useRouter()

// login
const login = reactive({
  username: '',
  password: '',
})

const isButtonValid = computed(() => {
  return login.username && login.password
})

const handleLogin = async ({ username, password }) => {
  // TODO: vLoading
  try {
    const res = await apiSignIn({ username, password })
    const { success, token } = res.data
    if (success) {
      JWT.saveToken(token)
      router.push({ name: 'admin-product' })
    } else {
      // TODO: Notice
    }
  } catch (error) {
    // TODO: Notice
  }
}
</script>

<template>
  <section class="bg-logo">
    <div class="container min-vh-100">
      <div class="row justify-content-center">
        <div class="col-lg-8">
          <div class="card top-50 p-3">
            <div class="card-body">
              <form @submit.prevent="handleLogin(login)" id="js-loginForm">
                <h3 class="text-center">登入</h3>
                <div class="mb-3">
                  <label for="js-loginEmail" class="form-label">帳號</label>
                  <input
                    id="js-loginEmail"
                    type="email"
                    class="form-control"
                    v-model.trim="login.username"
                    aria-describedby="emailHelp"
                    required
                  />
                </div>
                <div class="mb-3">
                  <label for="js-loginPassword" class="form-label">密碼</label>
                  <input
                    id="js-loginPassword"
                    type="password"
                    class="form-control"
                    v-model.trim="login.password"
                    required
                  />
                </div>
                <button
                  type="submit"
                  class="btn btn-primary text-white m-auto d-block"
                  :disabled="!isButtonValid"
                >
                  送出
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
