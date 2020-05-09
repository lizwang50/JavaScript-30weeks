import React from 'https://dev.jspm.io/react@16.13.1';
import ReactDOM from 'https://dev.jspm.io/react-dom@16.13.1';

const flatTaggedArgs = args => (Array.isArray(args[0]) && args[0].raw) ? args[0] : args;
const isNode = v => React.isValidElement(v) || typeof v === 'string' || Array.isArray(v);

const $ = type => (...propsAndChildren) => {
  const propsAndChildrenFlatten = flatTaggedArgs(propsAndChildren);
  return React.createElement(
    Array.isArray(type) ? type[0] : type,
    ...(
      isNode(propsAndChildrenFlatten[0]) ? [null, ...propsAndChildrenFlatten] : propsAndChildrenFlatten
    )
  );
};
const $$ = $(React.Fragment);

const array = n => (new Array(n)).fill().map((_, i) => i);

const { useEffect, useState, useMemo } = React;

const $Ring = $(({ dots, color, deg, highlight }) => {
  const barsWithDot = useMemo(() => (
    array(dots).map(key => (
      $`div`({
        key, className: 'bar',
        style: {
          width: `${dots * 8}px`,
          transform: `rotate(${key * 360 / dots}deg)`
        }
      },
        $`span`({ className: 'dot', style: { background: color } })
      )
    ))
  ), []);

  return (
    $`div`({
      className: highlight ? 'ring highlight' : 'ring',
      style: { transform: `rotate(${deg || 0}deg)` },
    },
      barsWithDot
    )
  )
});

const CLOCK_MODE_1 = 'CLOCK_MODE_1';
const CLOCK_MODE_2 = 'CLOCK_MODE_2';

const TIME_EACH_SEC = 1000;
const TIME_EACH_MIN = 60000;
const TIME_EACH_HOUR = 3600000;
const TIME_EACH_HALF_DAY = 43200000;

const calDeg = (time, each) => (360 * (time % each) / each);

const $Clock = $(({ mode }) => {
  const timeBase = useMemo(() => {
    const beginOfToday = new Date();
    beginOfToday.setHours(0, 0, 0, 0);
    return beginOfToday.getTime();
  }, []);
  const [time, setTime] = useState(Date.now() - timeBase);

  useEffect(() => {
    let keepGoing = true;
    const setTimeOnNextFrame = () => {
      if (!keepGoing) return;
      window.requestAnimationFrame(() => {
        setTime(Date.now() - timeBase);
        setTimeOnNextFrame();
      });
    }
    setTimeOnNextFrame();

    return () => {
      keepGoing = false;
    };
  }, [])

  return $`div`({ className: 'clock', key: mode },
    ...(mode === CLOCK_MODE_1 ? [
      $Ring({ dots: 3, color: '#000', deg: calDeg(time, TIME_EACH_SEC) }),
      $Ring({ dots: 6, color: '#2f2b0b', deg: calDeg(time, TIME_EACH_SEC * 2) }),
      $Ring({ dots: 9, color: '#6b6218', deg: calDeg(time, TIME_EACH_SEC * 4) }),
      $Ring({ dots: 12, color: '#b2a42a', deg: calDeg(time, TIME_EACH_SEC * 8) }),
      $Ring({ dots: 15, color: '#ffeb3b', deg: calDeg(time, TIME_EACH_SEC * 16) }),

      $Ring({ dots: 18, color: '#ffeb3b', deg: calDeg(time, TIME_EACH_MIN), highlight: true }),

      $Ring({ dots: 21, color: '#ede945', deg: calDeg(time, TIME_EACH_MIN * 2) }),
      $Ring({ dots: 24, color: '#d3e757', deg: calDeg(time, TIME_EACH_MIN * 3) }),
      $Ring({ dots: 27, color: '#b8e467', deg: calDeg(time, TIME_EACH_MIN * 6) }),
      $Ring({ dots: 30, color: '#9fe277', deg: calDeg(time, TIME_EACH_MIN * 15) }),
      $Ring({ dots: 33, color: '#88e087', deg: calDeg(time, TIME_EACH_MIN * 20) }),

      $Ring({ dots: 36, color: '#6bde99', deg: calDeg(time, TIME_EACH_HOUR), highlight: true }),

      $Ring({ dots: 39, color: '#8fe1b3', deg: calDeg(time, TIME_EACH_HOUR * 2) }),
      $Ring({ dots: 42, color: '#c1e6d9', deg: calDeg(time, TIME_EACH_HOUR * 6) }),
      $Ring({ dots: 45, color: '#f3ebfd', deg: calDeg(time, TIME_EACH_HOUR * 12) }),

      $Ring({ dots: 48, color: '#f5ebff', deg: calDeg(time, TIME_EACH_HALF_DAY), highlight: true }),
    ] : []),

    ...(mode === CLOCK_MODE_2 ? [
      $Ring({ dots: 3, color: '#000', deg: calDeg(time, TIME_EACH_HALF_DAY), highlight: true }),
      $Ring({ dots: 6, color: '#2f2b0b', deg: calDeg(time, TIME_EACH_HOUR * 12) }),
      $Ring({ dots: 9, color: '#6b6218', deg: calDeg(time, TIME_EACH_HOUR * 8) }),
      $Ring({ dots: 12, color: '#b2a42a', deg: calDeg(time, TIME_EACH_HOUR * 4) }),
      $Ring({ dots: 15, color: '#ffeb3b', deg: calDeg(time, TIME_EACH_HOUR * 2) }),

      $Ring({ dots: 18, color: '#ffeb3b', deg: calDeg(time, TIME_EACH_HOUR), highlight: true }),

      $Ring({ dots: 21, color: '#ede945', deg: calDeg(time, TIME_EACH_MIN * 20) }),
      $Ring({ dots: 24, color: '#d3e757', deg: calDeg(time, TIME_EACH_MIN * 15) }),
      $Ring({ dots: 27, color: '#b8e467', deg: calDeg(time, TIME_EACH_MIN * 6) }),
      $Ring({ dots: 30, color: '#9fe277', deg: calDeg(time, TIME_EACH_MIN * 3) }),
      $Ring({ dots: 33, color: '#88e087', deg: calDeg(time, TIME_EACH_MIN * 2) }),

      $Ring({ dots: 36, color: '#6bde99', deg: calDeg(time, TIME_EACH_MIN), highlight: true }),

      $Ring({ dots: 39, color: '#8fe1b3', deg: calDeg(time, TIME_EACH_SEC * 15) }),
      $Ring({ dots: 42, color: '#c1e6d9', deg: calDeg(time, TIME_EACH_SEC * 6) }),
      $Ring({ dots: 45, color: '#f3ebfd', deg: calDeg(time, TIME_EACH_SEC * 3) }),

      $Ring({ dots: 48, color: '#f5ebff', deg: calDeg(time, TIME_EACH_SEC) }),
    ] : [])
  );
});

const $App = $(() => {
  const [mode, setMode] = useState(CLOCK_MODE_1);
  return $`div`({ className: 'app-content', onClick: () => {
    setMode(mode === CLOCK_MODE_1 ? CLOCK_MODE_2 : CLOCK_MODE_1);
  }},
    $Clock({ mode }),
  );
});

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    $App(),
    document.getElementById('app')
  );
});
