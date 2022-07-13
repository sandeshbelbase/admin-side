import React, { useRef } from "react";
import { Editor } from "@tinymce/tinymce-react";
import { Controller } from "react-hook-form";

const CustomTextEditor = (props) => {
	const {
		control,
		defaultValue,
		placeholder = "",
		name,
		disabled = false,
		hidden = false,
		value,
	} = props;
	return (
		<>
			<Controller
				control={control}
				name={name}
				render={({ field: { onChange, value } }) => (
					<Editor
						onEditorChange={onChange}
						initialValue={`${defaultValue}`}
						init={{
							height: 200,
							menubar: false,
							plugins: [
								"advlist autolink lists link image charmap print preview anchor",
								"searchreplace visualblocks code fullscreen",
								"insertdatetime media table paste code help wordcount",
							],
							toolbar:
								"undo redo | formatselect | " +
								"bold italic backcolor | alignleft aligncenter " +
								"alignright alignjustify | bullist numlist outdent indent | " +
								"removeformat | help",
							content_style:
								"body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
						}}
					/>
				)}
			/>
		</>
	);
};

export default CustomTextEditor;
