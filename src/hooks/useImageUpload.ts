import { useState } from 'react'
import api from '@/utils/axios'
import { API_BASE_URL } from '@/constants/url-constants'

export default function useImageUpload() {
  const [isUploading, setIsUploading] = useState(false)

  const uploadImage = async (file: File): Promise<string> => {
    const formData = new FormData()
    formData.append('file', file)

    try {
      setIsUploading(true)
      const res = await api.post<{ url: string }>(
        `${API_BASE_URL}/info/edit`,
        formData,
        { headers: { 'Content-Type': 'multipart/form-data' } }
      )
      return res.data.url
    } finally {
      setIsUploading(false)
    }
  }

  return { uploadImage, isUploading }
}
