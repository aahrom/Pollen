// src/models/Product.ts
import { Schema, model, Types } from 'mongoose';

interface IProduct {
  name: string;
  brand: string;
  category?: string;
  chemicals: Types.ObjectId[]; // references to Chemical documents
}

const productSchema = new Schema<IProduct>({
  name: { type: String, required: true },
  brand: { type: String, required: true },
  category: { type: String },
  chemicals: [{ type: Schema.Types.ObjectId, ref: 'Chemical' }],
});

export default model<IProduct>('Product', productSchema);
