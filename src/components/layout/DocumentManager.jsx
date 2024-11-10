import React from "react";
import { Upload, FileText, CheckCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

const DocumentManager = () => {
  const documents = ["Invoice.pdf", "Packing_List.pdf", "Certificate.pdf"];

  return (
    <Card>
      <CardHeader>
        <CardTitle>Document Management</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="border-2 border-dashed border-gray-200 rounded-lg p-6 text-center">
          <Upload className="h-8 w-8 text-gray-400 mx-auto mb-2" />
          <p className="text-sm text-gray-500">
            Drag and drop files here or click to upload
          </p>
        </div>
        <div className="mt-4 space-y-2">
          {documents.map((doc) => (
            <div
              key={doc}
              className="flex items-center justify-between p-2 bg-gray-50 rounded"
            >
              <div className="flex items-center">
                <FileText className="h-4 w-4 text-gray-500 mr-2" />
                <span className="text-sm">{doc}</span>
              </div>
              <CheckCircle className="h-4 w-4 text-green-500" />
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default DocumentManager;
