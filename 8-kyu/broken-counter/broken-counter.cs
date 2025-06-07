public class Counter
{
    private int _value;
​
    public int Value
    {
        get
        {
            return _value;
        }
        private set
        {
            _value = value;
        }
    }
    
    public Counter()
    {
        Value = 0;
    }
    
    public void Increase()
    {
        Value++;
    }
    
    public void Reset()
    {
        Value = 0;
    }
}