import { useApiStore } from "@/store/useApiStore"

export default function useApi() {

    const { url, setUrl }=useApiStore()

    return {
        url
    }


}