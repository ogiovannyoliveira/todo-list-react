import Text from "../components/text"
import Icon from "../components/icon";
import Badge from "../components/badge";
import Button from "../components/button";

import TrashIcon from "../assets/icons/trash.svg?react";
import CheckIcon from "../assets/icons/check.svg?react";
import PencilIcon from "../assets/icons/pencil.svg?react";
import PlusIcon from "../assets/icons/plus.svg?react";
import XIcon from "../assets/icons/x.svg?react";
import SpinnerIcon from "../assets/icons/spinner.svg?react";
import ButtonIcon from "../components/button-icon";
import InputText from "../components/input-text";
import InputCheckbox from "../components/input-checkbox";
import Card from "../components/card";
import Container from "../components/container";
import Skeleton from "../components/skeleton";

function PageComponents() {
  return (
    <Container>
      <div className="grid gap-10">
        <div className="flex flex-col gap-2">
          <Text variant="body-sm-bold" className="text-pink-base">Chamando na bota</Text>
          <Text className="text-green-base">Chamando na bota</Text>
          <Text variant="body-md-bold">Chamando na bota</Text>
        </div>

        <div className="flex gap-1">
          <Icon svg={TrashIcon} className="fill-green-base" />
          <Icon svg={CheckIcon} />
          <Icon svg={PencilIcon} />
          <Icon svg={PlusIcon} />
          <Icon svg={XIcon} />
          <Icon svg={SpinnerIcon} animate />
        </div>

        <div className="flex gap-1">
          <Badge variant="secondary">5</Badge>
          <Badge variant="primary">2 de 5</Badge>
          <Badge loading>5</Badge>
        </div>

        <div>
          <Button icon={PlusIcon}>New Task</Button>
          <Button icon={PlusIcon} handling>Creating...</Button>
        </div>

        <div className="flex gap-1">
          <ButtonIcon icon={TrashIcon} variant='primary' />  
          <ButtonIcon icon={TrashIcon} variant='secondary' />  
          <ButtonIcon icon={TrashIcon} variant='tertiary' />  
          <ButtonIcon icon={TrashIcon} loading />
          <ButtonIcon icon={TrashIcon} handling />
        </div>

        <div>
          <InputText />
        </div>

        <div>
          <InputCheckbox />
          <InputCheckbox loading />
        </div>

        <div>
          <Card size="md">Hello world!</Card>
        </div>

        <div className="space-y-2">
          
          <Skeleton className="h-6" />
          <Skeleton className="h-6" />
          <Skeleton className="h-6 w-96" />
        </div>
      </div>
    </Container>
  );
}

export default PageComponents;