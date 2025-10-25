import Badge from "../components/badge";
import Text from "../components/text";
import useTasks from "../hooks/use-tasks";

function TasksSummary() {
  const { createdTasksCount, concludedTasksCount, isLoadingTasks } = useTasks();
  return (
    <>
      <div className="flex items-center gap-2">
        <Text variant="body-sm-bold" className="!text-gray-300">Created tasks</Text>
        <Badge variant="secondary" loading={isLoadingTasks}>{createdTasksCount}</Badge>
      </div>

      <div className="flex items-center gap-2">
        <Text variant="body-sm-bold" className="!text-gray-300">Done</Text>
        <Badge variant="primary" loading={isLoadingTasks}>{concludedTasksCount} of {createdTasksCount}</Badge>
      </div>
    </>
  );
}

export default TasksSummary;