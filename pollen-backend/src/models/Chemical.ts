// src/models/Chemical.ts
import { Schema, model } from 'mongoose';

interface IChemical {
  name: string;
  synonyms: string[];
  commonUsage?: string;
}

const chemicalSchema = new Schema<IChemical>({
  name: { type: String, required: true },
  synonyms: { type: [String], default: [] },
  commonUsage: { type: String },
});

export default model<IChemical>('Chemical', chemicalSchema);
