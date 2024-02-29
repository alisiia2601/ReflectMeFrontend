import { Form, useActionData } from "react-router-dom";
import classes from "./CreatePost.module.css";
import { ActionData } from "../types";

const CreatePost = () => {
  const error = useActionData() as ActionData;

  return (
    <div className={classes.createPostForm}>
      <div className={classes.headingBox}>
        <h2>Create post</h2>
      </div>
      <div className={classes.explanationBox}>
        <p>
          Welcome! Create a new post by filling out the form below. You can
          include a title, link, body, and an optional image.
        </p>
      </div>
      <div className={classes.formBox}>
        <Form method="post" encType="multipart/form-data">
          {error && <p className={classes.error}><b>Error:</b> {error.message}</p>}

          <div className={classes.formGroup}>
            <label htmlFor="title">Title</label>
            <input type="text" name="title" id="title" required />
          </div>
          <div className={classes.formGroup}>
            <label htmlFor="link">Link (optional)</label>
            <input type="text" name="link" id="link" />
          </div>
          <div className={classes.formGroup}>
            <label htmlFor="body">Body (optional)</label>
            <textarea name="body" id="body" />
          </div>
          <div className={classes.formGroup}>
            <label htmlFor="image">Image (optional)</label>
            <input type="file" name="image" id="image" accept="image/*" />
          </div>
          <div>
            <button type="submit">Create post</button>
          </div>
        </Form>
      </div>
    </div>
  );
}

export default CreatePost;
