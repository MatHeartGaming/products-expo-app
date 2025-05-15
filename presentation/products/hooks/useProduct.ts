import { getProductById } from "@/core/products/actions/get-product-by-id.actions"
import { Product } from "@/core/products/interfaces/product.interface"
import { useMutation, useQuery } from "@tanstack/react-query"
import { Alert } from "react-native"


export const useProduct = (productId: string) => {

    const productQuery = useQuery({
        queryKey: ['products', productId],
        queryFn: () => getProductById(productId),
        staleTime: 1000 * 60 * 60,
    })

    // Mutacion
    const producMutation = useMutation({
        mutationFn: async(data: Product) => {
            return data;
        },
        onSuccess(data: Product) {

            Alert.alert('El Producto ' + data.title + ' se guardo correctamente');
        },
    })

    // Mantener ID product en el case sea uno nuevo

    return {
        productQuery,
        producMutation,
    }

}