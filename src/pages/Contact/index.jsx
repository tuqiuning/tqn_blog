import React, { memo, useEffect } from 'react';
import Header from '@/pages/Index/components/Header';
import { Contact } from './style';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

// import { NotFound } from './style';

// export default memo(() => {
//   const dispatch = useDispatch();
//   useEffect(()=>{
//     dispatch(changeNavColor('#000000'));
//     sessionStorage.setItem('navColor','#000000');
//     dispatch(changeActiveNavIndex(-1));
//     sessionStorage.setItem('activeNavIndex',-1);
//   },[])

//   return (
//     <Contact>

//     </Contact>
//   )
// })

// import React from 'react';
import { Button, Form, Input, Select, Space,notification  } from 'antd';
const { Option } = Select;
const { TextArea } = Input;
const layout = {
  labelCol: {
    span: 12,
  },
  wrapperCol: {
    span: 20,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 10,
    span: 16,
  },
};
export default memo(() => {
  const { language } = useSelector((state) => {
    return state.system
  })
  const [form] = Form.useForm();
  const onFinish = (values) => {
    if (!values.message) {
      notification.error({
        message: language === 'en-US' ? 'Please enter your message' : '请输入你的留言',
      })
      return
    }
    axios.post('http://www.tuqiuning.cn/api/tuqiuning/add', values).then((res) => {
      if (res.data.status === 0) {
        notification.success({
          message: res.data.msg
        })
        form.resetFields();
      } else {
        notification.error({
          message: res.data.msg
        })
      }
    })
  };
  return (
    <Contact>
<Form
      // {...layout}
      form={form}
      name="control-hooks"
      onFinish={onFinish}
      style={{
        maxWidth: '100%',
      }}
    >
      <Form.Item
        name="name"
        label={language === 'en-US' ? 'Your Name':'你的名字'}
        rules={[
          {
            required: false,
          },
        ]}
      >
        <Input placeholder={language === 'en-US' ? 'Please enter your name':'请输入你的名字'}/>
      </Form.Item>
      <Form.Item
        name="gender"
        label={language === 'en-US' ? 'Your Email':'你的邮箱'}
        rules={[
          {
            required: false,
          },
        ]}
      >
        <Input placeholder={language === 'en-US' ? 'Please enter your email':'请输入你的邮箱'}/>
      </Form.Item>
      <Form.Item
        name="gender"
        label={language === 'en-US' ? 'Your Message':'你的留言'}
        rules={[
          {
            required: false,
          },
        ]}
      >
       <TextArea placeholder={language === 'en-US' ? 'Please enter your message':'请输入你的留言'}/>
      </Form.Item>
      <Form.Item {...tailLayout}>
        <Space>
          <Button type="default" htmlType="submit">
            {language === 'en-US' ? 'Submit':'提交' }
          </Button>
        </Space>
      </Form.Item>
    </Form>
    </Contact>
    
  );
});
