import { DropResult } from 'react-beautiful-dnd';
import { Column } from '../../common/components/Dialogs/ProjectDialog/types';

export const getDragDropCardResult = (
  result: DropResult,
  columns: Column[]
) => {
  const { destination, source } = result;
  /** If user tries to drop in an unknown destination */
  if (!destination) return columns;

  /** If the user drags and drops back in the same position */
  if (
    destination.droppableId === source.droppableId &&
    destination.index === source.index
  )
    return columns;

  /** If the user drops within the same column but in a different positoin */
  if (destination.droppableId === source.droppableId) {
    const columnIndex = parseInt(destination.droppableId);
    const target = columns[columnIndex].items;
    const [sourceItem] = target.splice(source.index, 1);
    target.splice(destination.index, 0, sourceItem);

    const columnsUpdated = columns.map((column, index) => {
      if (index === columnIndex) {
        return { ...column, items: target };
      } else {
        return { ...column };
      }
    });
    return columnsUpdated;
  }

  /** If the user moves from one column to another */
  if (destination.droppableId !== source.droppableId) {
    const destinationColumnIndex = parseInt(destination.droppableId);
    const sourceColumnIndex = parseInt(source.droppableId);
    const destinationTarget = columns[destinationColumnIndex].items;
    const sourceTarget = columns[sourceColumnIndex].items;

    const [sourceItem] = sourceTarget.splice(source.index, 1);
    destinationTarget.splice(destination.index, 0, sourceItem);

    const columnsUpdated = columns.map((column, index) => {
      if (index === destinationColumnIndex) {
        return { ...column, items: destinationTarget };
      } else if (index === sourceColumnIndex) {
        return { ...column, items: sourceTarget };
      } else {
        return { ...column };
      }
    });
    return columnsUpdated;
  }
  return columns;
};
