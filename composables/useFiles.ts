export default function useFiles() {
  const { $config } = useNuxtApp()
  function fileUrl(fileId: String) {
    return `${$config.directusUrl}/assets/${fileId}`
  }

  return {
    fileUrl,
  }
}
