<script setup>
import { apiUploadImg } from '@/api'

const fileInput = ref(null)
const fileUploading = ref(false)
const uploadType = ref(1)
const props = defineProps({
  images: [],
})
const items = ref([])
const inputImage = ref('')
const mainImgId = ref('')

const uploadFile = async () => {
  fileUploading.value = true
  const uploadFile = fileInput.value.files[0]
  const { size, lastModified } = uploadFile
  const limitMaxSize = 1024 * 1024
  if (size >= limitMaxSize) {
    fileInput.value = ''
    fileUploading.value = false
  } else {
    try {
      const formData = new FormData()
      formData.append('file-to-upload', uploadFile)
      const res = await apiUploadImg(formData)
      const { imageUrl, success } = res.data
      this.images.push({ id: `new${lastModified}`, url: imageUrl })
      fileInput.value = ''
      fileUploading.value = false
      if (success) {
        console.log('上傳成功')
      } else {
        console.log('上傳失敗')
      }
    } catch (e) {
      //
    }
  }
}
const updateTempImage = () => {
  if (!inputImage.value) {
    return
  }
  const id = `new${new Date().getTime()}`
  items.value.push({ id, url: inputImage.value })
  inputImage.value = ''
}

const deleteImg = () => {
  if (items.value[idx].id === mainImgId.value) {
    mainImgId.value = ''
  }
  images.value.splice(idx, 1)
}
</script>

<template>
  <div class="row">
    <div class="col-md-12">
      <ul class="list-unstyled d-flex mb-2">
        <li role="uploadType" class="me-3">
          <input
            type="radio"
            :value="1"
            name="uploadType"
            id="uploadImage"
            class="me-1"
            v-model="uploadType"
            :disabled="images.length >= 6"
          />
          <label for="uploadImage">上傳圖片</label>
        </li>
        <li class="nav-item" role="uploadType">
          <input
            type="radio"
            :value="2"
            name="uploadType"
            id="inputImage"
            class="me-1"
            v-model="uploadType"
          />
          <label for="inputImage">輸入圖片路徑</label>
        </li>
      </ul>
      <div v-if="uploadType === 1">
        <input
          type="file"
          id="customFile"
          class="form-control mb-2"
          ref="fileInput"
          accept="image/*"
          @change="uploadFile"
        />
        <div class="position-absolute bottom-0 end-0">
          <div class="spinner-border" role="status" v-if="fileUploading">
            <span class="visually-hidden">Loading...</span>
          </div>
        </div>
      </div>
      <div class="input-group mb-3" v-if="uploadType === 2">
        <input
          type="text"
          class="form-control"
          placeholder="圖片路徑"
          aria-label="圖片路徑"
          aria-describedby="updateTempImage"
          @keyup.enter="updateTempImage"
          v-model="inputImage"
        />
        <button class="btn btn-outline-secondary" type="button" @click="updateTempImage">
          新增圖片
        </button>
      </div>
    </div>
    <template v-if="images.length > 0">
      <div class="col-md-4" v-for="(img, idx) in images" :key="`img${idx}`">
        <div class="shadow-sm mb-3">
          <div class="p-2">
            <div class="productImg rounded">
              <img class="rounded-start w-100 h-100" :src="img.url" alt="產品圖片" />
            </div>
            <input
              :id="`mainImages${idx}`"
              type="radio"
              name="images"
              class="me-1"
              :value="img.id"
              v-model="mainImgId"
            />
            <label :for="`mainImages${idx}`">主要圖片</label>
            <div class="position-absolute top-0 end-0">
              <button class="btn rounded-circle shadow-sm" type="button" @click="deleteImg(idx)">
                🗑
              </button>
            </div>
          </div>
        </div>
      </div>
    </template>
  </div>
</template>

<style lang="scss"></style>
