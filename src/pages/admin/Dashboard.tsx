import { useContext } from "react"
import { Link, useNavigate } from "react-router-dom"
import Button from "../../components/Button/Button"
import { ProductContext } from "../../contexts/Product.Context"
import instance from "../../services/config"
import { Product, ProductAction } from "../../interfaces/Product"



const Dashboard = () => {
  const data = useContext(ProductContext)
  const navigate = useNavigate()
  const handleDelete = async (id: string | number) => {
    await instance.delete(`/products/${id}`
    )
    data?.dispatch({ type: ProductAction.DELETE_PRODUCTS, payload: id })
  }
  const LogOut = () => {
    if (confirm('Are you sure want to logout ?')) {
      localStorage.removeItem('token')
      navigate('/')
    }
  }
  return (
    <section className="md:max-w-6xl mx-auto">
      <div className="flex flex-row justify-between items-center ">
        <Link to={"/admin/product-form"} className="py-3 px-5 my-2 bg-blue-600 rounded-lg inline-block text-white font-bold">Add New</Link>
        <Button onClick={LogOut}>Log Out</Button>

      </div>
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 text-center">
          <tr>
            <th className="px-6 py-3">Id</th>
            <th className="px-6 py-3">Name</th>
            <th className="px-6 py-3">Price</th>
            <th className="px-6 py-3">Images</th>
            <th className="px-6 py-3">Description</th>
            <th className="px-6 py-3">Action</th>
          </tr>
        </thead>
        <tbody>
          {data?.state.products.map((index: Product) => (
            <tr key={index.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <td className="px-6 py-4">{index.id}</td>
              <td className="px-6 py-4">{index.title}</td>
              <td className="px-6 py-4">{index.price}</td>
              <td className="text-center">{index.thumbnail ? <img src={index.thumbnail} alt={index.description} /> : 'Updating'}</td>
              <td className="px-6 py-4">{index.description}</td>
              <td>
                <div className="flex flex-row gap-2">

                  <Link to={`/admin/product-form/${index.id}`} className="btn btn-warning">Edit</Link>
                  <Button onClick={() => handleDelete(Number(index.id))} >Delete</Button>
                </div>
              </td>
            </tr>

          ))}
        </tbody>
      </table>
    </section>
  )
}

export default Dashboard
