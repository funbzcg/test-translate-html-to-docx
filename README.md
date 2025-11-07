<!--
 * @Description:
 * @Date: 2024-11-22 14:42:40
-->

# docx-export

``` javascript
  import { useCreateDocx } from 'xxx/index.es.js';
  /** 图片地址 base64 带头*/
  const images = [];
  /** html字符串，内联样式 */
  const html = ''
  const exportTemplateDocx = async () => {
    let o = useCreateDocx(html, { bgImgs:images });
    // 导出 docx 的 blob
    const blob = await o.docxAsBlob();
    // 导出文件
    saveAs(blob, `文件-${-new Date()}.docx`);
  };

```


