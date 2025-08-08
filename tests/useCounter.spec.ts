import { describe, expect, test } from 'vitest';
import { renderHook, act } from '@testing-library/react';
import useCounter from '../src/hooks/features/homepage/useCounter';

describe('useCounter', () => {
  test('should initialize counter to 0', () => {
    const { result } = renderHook(() => useCounter());
    expect(result.current.count).toBe(0);
  });

  test('should increment counter by val', () => {
    const { result } = renderHook(() => useCounter());
    
    act(() => {
      result.current.increment();
    });
    
    expect(result.current.count).toBe(1); // val defaults to 1
  });

  test('should update val and increment accordingly', () => {
    const { result } = renderHook(() => useCounter());
    
    act(() => {
      result.current.setVal(5);
    });
    
    act(() => {
      result.current.increment();
    });
    
    expect(result.current.count).toBe(5);
  });
});