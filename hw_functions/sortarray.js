function sortArray(array, order)
{
    switch (order)
    {
        case 'asc':
            return array.sort((a,b) => a-b);
            break;

        case 'desc':
            return array.sort((a,b) => b-a);
            break;
    }
}