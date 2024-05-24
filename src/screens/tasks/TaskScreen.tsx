import {View, Text, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import ContainerComponent from '../../components/ContainerComponent';
import SectionConponent from '../../components/SectionConponent';
import HeaderAppComponent from '../../components/HeaderAppComponent';
import {Back, Clock, PenAdd} from 'iconsax-react-native';
import {colors} from '../../constants/colors';
import {useNavigation} from '@react-navigation/native';
import {RootStack} from '../../navigations/TypeChecking';
import TextComponent from '../../components/TextComponent';
import InputComponent from '../../components/InputComponent';
import {taskModel} from '../../model/TaskModel';
import DateTimePickerComponent from '../../components/DateTimePickerComponent';
import RowComponent from '../../components/RowComponent';
import SpaceComponent from '../../components/SpaceComponent';

const initialVal: taskModel = {
  title: '',
  description: '',
  dueDate: new Date(),
  start: new Date(),
  end: new Date(),
  uids: [],
  fileUrls: [],
};
const TaskScreen = () => {
  const [addtask, setaddtask] = useState<taskModel>(initialVal);

  const handleChangeValue = (key: string, value: string | Date) => {
    const newdata: any = {...addtask};
    newdata[`${key}`] = value;

    setaddtask(newdata);
  };


  const handleAddtask = ()=>{
    console.log(addtask)
  }

  const navigation = useNavigation<RootStack>();
  return (
    <ContainerComponent>
      <SectionConponent>
        <View>
          <HeaderAppComponent
            fldicoration="row"
            title="Add new task"
            icon={
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <Back size={20} color={colors.white} />
              </TouchableOpacity>
            }
          />
        </View>
      </SectionConponent>

      <View>
        <InputComponent
          value={addtask.title}
          onChange={val => handleChangeValue('title', val)}
          placeHolder="hello"
          alowClear
          title="Title"
        />
        <InputComponent
          value={addtask.description}
          onChange={val => handleChangeValue('description', val)}
          placeHolder="description"
          alowClear
          multible
          numberofline={3}
          title="Description"
        />
      </View>

      <DateTimePickerComponent
        title="Due Date"
        type="date"
        selected={addtask.dueDate}
        pleaceHolder="chose"
        onselected={val => handleChangeValue('dueDate', val)}
      />

      <RowComponent>
        <View style={{flex: 1}}>
          <DateTimePickerComponent
            title="Start "
            type="time"
            selected={addtask.start}
            pleaceHolder="chose"
            onselected={val => handleChangeValue('start', val)}
          />
        </View>
              <SpaceComponent width={12}/>
        <View style={{flex: 1}}>
          <DateTimePickerComponent
            title="End "
            type="time"
            selected={addtask.end}
            pleaceHolder="chose"
            onselected={val => handleChangeValue('end', val)}
          />
        </View>
      </RowComponent>

      <TouchableOpacity onPress={()=>handleAddtask()}>
        <Text>Save</Text>
      </TouchableOpacity>
    </ContainerComponent>
  );
};

export default TaskScreen;
