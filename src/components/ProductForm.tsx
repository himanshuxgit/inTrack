// import {
//   Container,
//   Typography,
//   Input,
//   TextField,
//   InputAdornment,
//   Button,
// } from "@mui/material";
// import { ProductType } from "../pages/Dashboard/AddProduct";
// import { ChangeEvent, useState } from "react";

// const HUGGING_FACE_API_URL = import.meta.env.VITE_HUGGING_FACE_API_URL;
// const HUGGING_FACE_API_TOKEN = import.meta.env.VITE_HUGGING_FACE_API_TOKEN;

// type ProductFormProps = {
//   product: ProductType;
//   productImage?: File | null;
//   imagePreview?: string | null;
//   handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
//   handleImageChange?: (event: ChangeEvent<HTMLInputElement>) => void;
//   saveProduct: (event: any) => Promise<void>;
//   isEdit: boolean;
// };

// const ProductForm = ({
//   product,
//   productImage,
//   imagePreview,
//   handleChange,
//   handleImageChange: externalHandleImageChange,
//   saveProduct,
//   isEdit,
// }: ProductFormProps) => {
//   const [productState, setProductState] = useState(product);

//   const internalHandleImageChange = async (event: ChangeEvent<HTMLInputElement>) => {
//     if (event.target.files && event.target.files[0]) {
//       const file = event.target.files[0];
//       if (externalHandleImageChange) {
//         externalHandleImageChange(event); // For updating the image preview
//       }

//       const fileData = new FormData();
//       fileData.append("file", file);

//       if (!HUGGING_FACE_API_URL || !HUGGING_FACE_API_TOKEN) {
//         console.error('API URL or Token is not defined');
//         return;
//       }

//       try {
//         const response = await fetch(HUGGING_FACE_API_URL, {
//           method: 'POST',
//           headers: {
//             'Authorization': `Bearer ${HUGGING_FACE_API_TOKEN}`,
//             'Content-Type': file.type,
//           },
//           body: file,
//         });

//         if (!response.ok) {
//           throw new Error(`API call failed: ${response.statusText}`);
//         }

//         const result = await response.json();
//         const caption = result[0].generated_text;

//         setProductState({ ...productState, description: caption });
//       } catch (error) {
//         console.error('Error generating product description:', error);
//       }
//     }
//   };

//   const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
//     setProductState({ ...productState, [event.target.name]: event.target.value });
//   };
//   const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
//     setProductState({ ...productState, [event.target.name]: event.target.value });
//   };
//   return (
//     <form
//       style={{
//         display: "flex",
//         alignItems: "center",
//         justifyContent: "center",
//         flexDirection: "column",
//         width: "100%",
//       }}
//       onSubmit={saveProduct}
//     >
//       {!isEdit && (
//         <Container
//           sx={{
//             padding: "5px",
//             display: "flex",
//             border: "1px solid lightgrey",
//             borderRadius: "5px",
//             justifyContent: "center",
//             flexDirection: "column",
//             width: "100%",
//           }}
//         >
//           <Typography>Product Image:</Typography>
//           <Typography variant="subtitle2">
//             Supported formats: jpg, jpeg, png
//           </Typography>
//           <Input onChange={internalHandleImageChange} type="file" />
//           <Container style={{ display: "flex", justifyContent: "center" }}>
//             {imagePreview ? (
//               <img
//                 style={{ width: "200px", aspectRatio: "auto" }}
//                 alt={productState.name}
//                 src={imagePreview}
//               />
//             ) : (
//               <p>No image set for this product</p>
//             )}
//           </Container>
//         </Container>
//       )}
//       <TextField
//         fullWidth
//         sx={{ margin: "10px" }}
//         label="Product Name"
//         value={productState.name}
//         name="name"
//         onChange={handleInputChange}
//       />
//       <TextField
//         fullWidth
//         sx={{ margin: "10px" }}
//         label="Product Category"
//         value={productState.category}
//         name="category"
//         onChange={handleInputChange}
//       />
//       <TextField
//         fullWidth
//         sx={{ margin: "10px" }}
//         label="Product Price"
//         value={productState.price}
//         name="price"
//         InputProps={{
//           startAdornment: <InputAdornment position="start">$</InputAdornment>,
//         }}
//         onChange={handleInputChange}
//       />
//       <TextField
//         fullWidth
//         sx={{ margin: "10px" }}
//         label="Product Quantity"
//         value={productState.quantity}
//         name="quantity"
//         onChange={handleInputChange}
//       />
//       <TextField
//         fullWidth
//         label="Product Description"
//         multiline
//         rows={4}
//         value={productState.description}
//         name="description"
//         onChange={handleInputChange}
//       />
//       {isEdit ? (
//         <Button
//           type="submit"
//           sx={{ margin: "30px" }}
//           variant="contained"
//           color="primary"
//         >
//           Save Changes
//         </Button>
//       ) : (
//         <Button
//           type="submit"
//           sx={{ margin: "30px" }}
//           variant="contained"
//           color="primary"
//         >
//           Add Product
//         </Button>
//       )}
//     </form>
//   );
// };

// export default ProductForm;









// import {
//   Container,
//   Typography,
//   Input,
//   TextField,
//   InputAdornment,
//   Button,
// } from "@mui/material";
// import { ProductType } from "../pages/Dashboard/AddProduct";
// import { ChangeEvent } from "react";

// type ProductFormProps = {
//   product: ProductType;
//   productImage?: File | null;
//   imagePreview?: string | null;
//   handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
//   handleImageChange?: (event: ChangeEvent<HTMLInputElement>) => void;
//   saveProduct: (event: any) => Promise<void>;
//   isEdit: boolean;
// };

// const ProductForm = ({
//   product,
//   productImage,
//   imagePreview,
//   handleChange,
//   handleImageChange,
//   saveProduct,
//   isEdit,
// }: ProductFormProps) => {
//   return (
//     <form
//       style={{
//         display: "flex",
//         alignItems: "center",
//         justifyContent: "center",
//         flexDirection: "column",
//         width: "100%",
//       }}
//       onSubmit={saveProduct}
//     >
//       {!isEdit && (
//         <Container
//           sx={{
//             padding: "5px",
//             display: "flex",
//             border: "1px solid lightgrey",
//             borderRadius: "5px",
//             justifyContent: "center",
//             flexDirection: "column",
//             width: "100%",
//           }}
//         >
//           <Typography>Product Image:</Typography>
//           <Typography variant="subtitle2">
//             Supported formats: jpg, jpeg, png
//           </Typography>
//           <Input onChange={handleImageChange} type="file" />
//           <Container style={{ display: "flex", justifyContent: "center" }}>
//             {productImage ? (
//               <img
//                 style={{ width: "200px", aspectRatio: "auto" }}
//                 alt={product.name}
//                 src={imagePreview!}
//               />
//             ) : (
//               <p>No image set for this product</p>
//             )}
//           </Container>
//         </Container>
//       )}
//       <TextField
//         fullWidth
//         sx={{ margin: "10px" }}
//         label="Product Name"
//         value={product.name}
//         name="name"
//         onChange={handleChange}
//       />
//       <TextField
//         fullWidth
//         sx={{ margin: "10px" }}
//         label="Product Category"
//         value={product.category}
//         name="category"
//         onChange={handleChange}
//       />
//       <TextField
//         fullWidth
//         sx={{ margin: "10px" }}
//         label="Product Price"
//         value={product.price}
//         name="price"
//         InputProps={{
//           startAdornment: <InputAdornment position="start">$</InputAdornment>,
//         }}
//         onChange={handleChange}
//       />
//       <TextField
//         fullWidth
//         sx={{ margin: "10px" }}
//         label="Product Quantity"
//         value={product.quantity}
//         name="quantity"
//         onChange={handleChange}
//       />
//       <TextField
//         fullWidth
//         label="Product Description"
//         multiline
//         rows={4}
//         value={product.description}
//         name="description"
//         onChange={handleChange}
//       />
//       {isEdit ? (
//         <Button
//           type="submit"
//           sx={{ margin: "30px" }}
//           variant="contained"
//           color="primary"
//         >
//           Save Changes
//         </Button>
//       ) : (
//         <Button
//           type="submit"
//           sx={{ margin: "30px" }}
//           variant="contained"
//           color="primary"
//         >
//           Add Product
//         </Button>
//       )}
//     </form>
//   );
// };

// export default ProductForm;




import {
  Container,
  Typography,
  Input,
  TextField,
  InputAdornment,
  Button,
} from "@mui/material";
import { ProductType } from "../pages/Dashboard/AddProduct";
import { ChangeEvent } from "react";

const HUGGING_FACE_API_URL = import.meta.env.VITE_HUGGING_FACE_API_URL;
const HUGGING_FACE_API_TOKEN = import.meta.env.VITE_HUGGING_FACE_API_TOKEN;

type ProductFormProps = {
  product: ProductType;
  productImage?: File | null;
  imagePreview?: string | null;
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
  handleImageChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  saveProduct: (event: any) => Promise<void>;
  isEdit: boolean;
};

const ProductForm = ({
  product,
  productImage,
  imagePreview,
  handleChange,
  handleImageChange: externalHandleImageChange,
  saveProduct,
  isEdit,
}: ProductFormProps) => {

  const internalHandleImageChange = async (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      if (externalHandleImageChange) {
        externalHandleImageChange(event);
      }

      const fileData = new FormData();
      fileData.append("file", file);

      if (!HUGGING_FACE_API_URL || !HUGGING_FACE_API_TOKEN) {
        console.error('API URL or Token is not defined');
        return;
      }

      try {
        const response = await fetch(HUGGING_FACE_API_URL, {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${HUGGING_FACE_API_TOKEN}`,
            'Content-Type': file.type,
          },
          body: file,
        });

        if (!response.ok) {
          throw new Error(`API call failed: ${response.statusText}`);
        }

        const result = await response.json();
        const caption = result[0].generated_text;
        handleChange({ target: { name: 'description', value: caption } } as ChangeEvent<HTMLInputElement>);
      } catch (error) {
        console.error('Error generating product description:', error);
      }
    }
  };

  return (
    <form
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        width: "100%",
      }}
      onSubmit={saveProduct}
    >
      {!isEdit && (
        <Container
          sx={{
            padding: "5px",
            display: "flex",
            border: "1px solid lightgrey",
            borderRadius: "5px",
            justifyContent: "center",
            flexDirection: "column",
            width: "100%",
          }}
        >
          <Typography>Product Image:</Typography>
          <Typography variant="subtitle2">
            Supported formats: jpg, jpeg, png
          </Typography>
          <Input onChange={internalHandleImageChange} type="file" />
          <Container style={{ display: "flex", justifyContent: "center" }}>
            {imagePreview ? (
              <img
                style={{ width: "200px", aspectRatio: "auto" }}
                alt={product.name}
                src={imagePreview}
              />
            ) : (
              <p>No image set for this product</p>
            )}
          </Container>
        </Container>
      )}
      <TextField
        fullWidth
        sx={{ margin: "10px" }}
        label="Product Name"
        value={product.name}
        name="name"
        onChange={handleChange}
      />
      <TextField
        fullWidth
        sx={{ margin: "10px" }}
        label="Product Category"
        value={product.category}
        name="category"
        onChange={handleChange}
      />
      <TextField
        fullWidth
        sx={{ margin: "10px" }}
        label="Product Price"
        value={product.price}
        name="price"
        InputProps={{
          startAdornment: <InputAdornment position="start">$</InputAdornment>,
        }}
        onChange={handleChange}
      />
      <TextField
        fullWidth
        sx={{ margin: "10px" }}
        label="Product Quantity"
        value={product.quantity}
        name="quantity"
        onChange={handleChange}
      />
      <TextField
        fullWidth
        label="Product Description"
        multiline
        rows={4}
        value={product.description}
        name="description"
        onChange={handleChange}
      />
      {isEdit ? (
        <Button
          type="submit"
          sx={{ margin: "30px" }}
          variant="contained"
          color="primary"
        >
          Save Changes
        </Button>
      ) : (
        <Button
          type="submit"
          sx={{ margin: "30px" }}
          variant="contained"
          color="primary"
        >
          Add Product
        </Button>
      )}
    </form>
  );
};

export default ProductForm;
