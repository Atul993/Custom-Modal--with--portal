import { useState } from "react";
import Modal from "./Modal";

const Mainscreen = () => {
    const [showRecipe, setShowRecipe] = useState(false);

    const [defaultScreen, setDefaultScreen] = useState(true);

    const recipeClickHandler = () => {
        setShowRecipe(true);
    };
    return (
        <div className={`main_screen`}>
            <Modal onClose={() => setDefaultScreen(false)} show={defaultScreen}>
                <p>
                    Atul Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                    the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of
                    type and scrambled it to make a type specimen book. It has survived not only five centuries, but
                    also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in
                    the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently
                    with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
            </Modal>
            <p >
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
                scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap
                into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the
                release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing
                software like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
            <button className="main_screen_btn" onClick={recipeClickHandler}>
                SHOWS RECIPIS
            </button>
            {showRecipe && (
                <Modal onClose={() => setShowRecipe(false)} show={showRecipe} bottom="bottom">
                    <p>
                        Lorem 2 Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                        the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley
                        of type and scrambled it to make a type specimen book. It has survived not only five centuries,
                        but also the leap into electronic typesetting, remaining essentially unchanged. It was
                        popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                        and more recently with desktop publishing software like Aldus PageMaker including versions of
                        Lorem Ipsum.
                    </p>
                </Modal>
            )}
        </div>
    );
};

export default Mainscreen;
