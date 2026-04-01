import { sleep } from '@/lib/utils'

describe('sleep', () => {
  it('resolves asynchronously', async () => {
    const start = Date.now()
    await sleep(10)
    expect(Date.now() - start).toBeGreaterThanOrEqual(8)
  })
})
