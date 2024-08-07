import React, { useState, useRef, useEffect } from 'react';
import warning from '../../assets/log-regi/warning.webp';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import { updateBody } from '../../redux/slices/wordpresFormSlice';

const Body = ({ errorsDashb }) => {
  const dispatch = useDispatch();
  const bodyContent = useSelector((state) => state.wordpressForm.bodyContent);
  const [openItem, setOpenItem] = useState(true);
  const [highlightedText, setHighlightedText] = useState('');
  const contentRef = useRef(null);

  useEffect(() => {
    if (contentRef.current) {
      const contentDiv = contentRef.current;

      // Update the content
      contentDiv.innerHTML = bodyContent;

      // Move cursor to the end
      const range = document.createRange();
      const selection = window.getSelection();
      range.selectNodeContents(contentDiv);
      range.collapse(false);
      selection.removeAllRanges();
      selection.addRange(range);
    }
  }, [bodyContent]);

  const applyHighlight = () => {
    if (highlightedText) {
      const contentDiv = contentRef.current;
      const selection = window.getSelection();
      const range = selection.getRangeAt(0);

      if (range) {
        const span = document.createElement('span');
        span.className = 'select_dynamic_content';
        span.innerHTML = `<span class="hidden-dynamic-text">&#36;&#123;</span><span class="select_dynamic_content_inner">${range.toString()}</span><span class="hidden-dynamic-text">&#125;</span>`;

        range.deleteContents();
        range.insertNode(span);

        const newRange = document.createRange();
        const selection = window.getSelection();
        newRange.setStartAfter(span);
        newRange.collapse(true);
        selection.removeAllRanges();
        selection.addRange(newRange);

        // Update the content
        const newContent = contentDiv.innerHTML;
        console.log(newContent, '= dynamic value');
        dispatch(updateBody(newContent));
        setHighlightedText('');
      }
    }
  };

  const handleItemClick = () => {
    setOpenItem((val) => !val);
  };

  const handleChange = () => {
    const contentDiv = contentRef.current;
    dispatch(updateBody(contentDiv.innerHTML));
  };

  const handleMouseUp = () => {
    const selection = window.getSelection();
    if (selection.toString().trim()) {
      setHighlightedText(selection.toString());
    }
  };

  return (
    <div
      className={`custom-template grid grid-col px-1 gap-[1rem] ${openItem ? 'cursor-pointer' : 'cursor-pointer'}`}
    >
      <div
        className="flex text-logoColor justify-between lg:justify-center cursor-pointer py-2 lg:py-1 gap-5"
        onClick={handleItemClick}
      >
        <h1 className="font-bold text-[18px] text-center md:border-none w-fit">
          Body Content
        </h1>
        <div
          className={`${openItem ? 'rotate-180 transition-max-rotate duration-300 ease-in-out' : 'rotate-0 transition-max-rotate duration-300 ease-in-out'}`}
        >
          <MdOutlineKeyboardArrowDown size={25} />
        </div>
      </div>

      <div
        className={`flex flex-col gap-[1px] transition-max-height duration-1000 ease-in-out overflow-hidden ${openItem ? 'max-h-screen opacity-100 mb-1' : 'max-h-0 opacity-0'}`}
      >
        <div className="flex flex-col">
          <label htmlFor="bodyContent" className="mb-1 font-semibold">
            Body Content
          </label>

          <div
            ref={contentRef}
            contentEditable
            className="focus:outline-none cursor-text bg-inputBg focus:border-dblue border-[#9a979792] border-[0.5px] rounded-lg p-2 resize-none min-h-[5em]"
            onInput={handleChange}
            onMouseUp={handleMouseUp}
            id="bodyContent"
          />
          <button
            className="bg-blue-500 text-black all__side__shadow_btn shadow-white bg-[#b7f36d] w-fit rounded-lg px-2 py-1 mt-2"
            onClick={applyHighlight}
          >
            Select and Dynamic
          </button>
          <p
            className={`text-[12px] text-[red] opacity-${errorsDashb.bodyContent ? '100' : '0'} flex items-center gap-1 ps-2`}
          >
            <img src={warning} className="h-[12px] w-[12px]" alt="warning" />{' '}
            {errorsDashb.bodyContent}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Body;
